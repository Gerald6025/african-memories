import { BadRequestException, ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createHmac } from "node:crypto";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateEnquiryDto } from "./dto/create-enquiry.dto.js";
import { ListEnquiriesDto, UpdateEnquiryDto } from "./dto/manage-enquiry.dto.js";

@Injectable()
export class EnquiriesService {
  constructor(private readonly prisma: PrismaService, private readonly config: ConfigService) {}

  async create(dto: CreateEnquiryDto, ip: string) {
    if (dto.website) throw new BadRequestException("Unable to accept this enquiry");
    const clientHash = createHmac("sha256", this.config.getOrThrow<string>("ADMIN_API_KEY")).update(ip).digest("hex");
    return this.prisma.$transaction(async tx => {
      // Database locks keep limits and retries consistent across multiple API instances.
      for (const key of [`request:${dto.requestId}`, `client:${clientHash}`, `email:${dto.email}`].sort()) {
        await tx.$executeRaw`SELECT pg_advisory_xact_lock(hashtextextended(${key}, 0))`;
      }
      const existing = await tx.enquiry.findUnique({ where: { requestId: dto.requestId } });
      if (existing) {
        if (existing.email !== dto.email || existing.message !== dto.message || existing.name !== dto.name
          || existing.phone !== dto.phone || existing.destination !== dto.destination) {
          throw new ConflictException("Request reference already used. Please submit a new enquiry.");
        }
        return { id: existing.id, received: true };
      }
      const since = new Date(Date.now() - 60_000);
      const [emailCount, clientCount] = await Promise.all([
        tx.enquiry.count({ where: { email: dto.email, createdAt: { gte: since } } }),
        tx.enquiry.count({ where: { clientHash, createdAt: { gte: since } } }),
      ]);
      if (emailCount >= 5 || clientCount >= 60) {
        throw new HttpException("Please wait a minute before submitting again.", HttpStatus.TOO_MANY_REQUESTS);
      }
      const { website: _website, ...data } = dto;
      const enquiry = await tx.enquiry.create({ data: { ...data, clientHash }, select: { id: true } });
      return { id: enquiry.id, received: true };
    }, { timeout: 10_000 });
  }

  async list(query: ListEnquiriesDto) {
    const where = query.status ? { status: query.status } : {};
    const [items, total] = await this.prisma.$transaction([
      this.prisma.enquiry.findMany({ where, orderBy: [{ createdAt: "desc" }, { id: "desc" }], skip: (query.page - 1) * query.limit, take: query.limit,
        select: { id: true, name: true, email: true, phone: true, destination: true, message: true, source: true, status: true,
          createdAt: true, updatedAt: true, notificationSentAt: true, notificationAttempts: true, notificationError: true } }),
      this.prisma.enquiry.count({ where }),
    ]);
    return { items, total, page: query.page, limit: query.limit };
  }

  async update(id: string, dto: UpdateEnquiryDto) {
    const enquiry = await this.prisma.enquiry.findUnique({ where: { id }, select: { id: true } });
    if (!enquiry) throw new NotFoundException("Enquiry not found");
    return this.prisma.enquiry.update({ where: { id }, data: { status: dto.status }, select: { id: true, status: true } });
  }
}
