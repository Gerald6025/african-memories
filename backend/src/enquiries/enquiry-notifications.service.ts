import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "../prisma/prisma.service.js";

@Injectable()
export class EnquiryNotificationsService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(EnquiryNotificationsService.name);
  private timer?: ReturnType<typeof setInterval>;
  private running = false;

  constructor(private readonly prisma: PrismaService, private readonly config: ConfigService) {}

  onModuleInit() {
    if (!this.config.get("RESEND_API_KEY") || !this.config.get("ENQUIRY_EMAIL_FROM") || !this.config.get("ENQUIRY_EMAIL_TO")) {
      this.logger.warn("Enquiry email notifications disabled; enquiries will still be saved.");
      return;
    }
    this.timer = setInterval(() => { void this.deliverPending(); }, 60_000);
    this.timer.unref();
    void this.deliverPending();
  }

  onModuleDestroy() { if (this.timer) clearInterval(this.timer); }

  async deliverPending() {
    if (this.running) return;
    this.running = true;
    try {
      const now = new Date();
      const pending = await this.prisma.enquiry.findMany({
        where: { notificationSentAt: null, notificationNextAt: { lte: now }, notificationAttempts: { lt: 8 } },
        orderBy: { createdAt: "asc" }, take: 10,
      });
      for (const enquiry of pending) {
        const claimed = await this.prisma.enquiry.updateMany({
          where: { id: enquiry.id, notificationSentAt: null, notificationNextAt: { lte: now }, notificationAttempts: enquiry.notificationAttempts },
          data: { notificationAttempts: { increment: 1 }, notificationNextAt: new Date(Date.now() + 300_000) },
        });
        if (!claimed.count) continue;
        try {
          const response = await fetch("https://api.resend.com/emails", {
            method: "POST", signal: AbortSignal.timeout(15_000),
            headers: { Authorization: `Bearer ${this.config.getOrThrow<string>("RESEND_API_KEY")}`, "Content-Type": "application/json", "Idempotency-Key": `enquiry/${enquiry.id}` },
            body: JSON.stringify({ from: this.config.getOrThrow<string>("ENQUIRY_EMAIL_FROM"), to: [this.config.getOrThrow<string>("ENQUIRY_EMAIL_TO")],
              reply_to: enquiry.email, subject: `New website enquiry: ${enquiry.id}`,
              text: `Reference: ${enquiry.id}\nName: ${enquiry.name}\nEmail: ${enquiry.email}\nPhone: ${enquiry.phone}\nDestination: ${enquiry.destination}\n\n${enquiry.message}` }),
          });
          if (!response.ok) throw new Error(`Provider HTTP ${response.status}`);
          await this.prisma.enquiry.update({ where: { id: enquiry.id }, data: { notificationSentAt: new Date(), notificationError: null } });
        } catch {
          await this.prisma.enquiry.update({ where: { id: enquiry.id }, data: { notificationError: "Notification failed; check email provider configuration and retry queue." } });
          this.logger.warn(`Enquiry notification retry scheduled: ${enquiry.id}`);
        }
      }
    } catch { this.logger.error("Unable to process enquiry notification queue; check database connectivity."); }
    finally { this.running = false; }
  }
}
