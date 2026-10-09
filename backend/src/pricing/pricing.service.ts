import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreatePriceDto } from "./dto/create-price.dto.js";
import { publicRelations } from "../activities/public-relations.js";
import { UpdatePriceDto } from "./dto/update-price.dto.js";

@Injectable()
export class PricingService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePriceDto) {
    const errors: string[] = [];

    const validFrom = new Date(dto.validFrom);
    const validTo = new Date(dto.validTo);
    if (validTo <= validFrom) {
      errors.push("validTo must be after validFrom");
    }

    if (!dto.activityId) {
      errors.push("activityId is required");
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const activity = await this.prisma.activity.findUnique({
      where: { id: dto.activityId },
    });

    if (!activity) {
      throw new NotFoundException("Activity not found");
    }

    return this.prisma.price.create({
      data: {
        amount: dto.amount,
        currency: dto.currency,
        validFrom,
        validTo,
        isActive: dto.isActive ?? true,
        activity: { connect: { id: dto.activityId } },
      },
    });
  }

  async update(id: string, dto: UpdatePriceDto) {
    const existing = await this.prisma.price.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException("Price not found");
    const validFrom = dto.validFrom ? new Date(dto.validFrom) : existing.validFrom;
    const validTo = dto.validTo ? new Date(dto.validTo) : existing.validTo;
    if (validTo <= validFrom) throw new BadRequestException("validTo must be after validFrom");
    if (dto.activityId && !await this.prisma.activity.findUnique({ where: { id: dto.activityId }, select: { id: true } })) {
      throw new NotFoundException("Activity not found");
    }
    return this.prisma.price.update({ where: { id }, data: { ...dto, validFrom, validTo } });
  }

  async remove(id: string) {
    if (!await this.prisma.price.findUnique({ where: { id }, select: { id: true } })) throw new NotFoundException("Price not found");
    await this.prisma.price.delete({ where: { id } });
    return { deleted: true };
  }

  async findForAdmin(activityId: string) {
    if (!await this.prisma.activity.findUnique({ where: { id: activityId }, select: { id: true } })) throw new NotFoundException("Activity not found");
    return this.prisma.price.findMany({ where: { activityId }, orderBy: { validFrom: "desc" }, take: 500 });
  }

  async findByActivityId(activityId: string) {
    const activity = await this.prisma.activity.findUnique({
      where: { id: activityId },
    });

    if (!activity || activity.status !== "PUBLISHED") {
      throw new NotFoundException("Activity not found");
    }

    return this.prisma.price.findMany({
      where: { activityId, ...publicRelations().prices.where },
      orderBy: { validFrom: "desc" },
    });
  }
}
