import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { CreateAvailabilityDto } from "./dto/create-availability.dto.js";
import { publicRelations } from "../activities/public-relations.js";
import { UpdateAvailabilityDto } from "./dto/update-availability.dto.js";

@Injectable()
export class AvailabilityService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateAvailabilityDto) {
    const errors: string[] = [];

    const startsAt = new Date(dto.startsAt);
    const endsAt = new Date(dto.endsAt);
    if (endsAt <= startsAt) {
      errors.push("endsAt must be after startsAt");
    }

    if (dto.remaining > dto.capacity) {
      errors.push("remaining cannot exceed capacity");
    }

    if (!dto.activityId) {
      errors.push("activityId is required");
    }

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const activity = await this.prisma.activity.findUnique({
      where: { id: dto.activityId }, select: { id: true },
    });
    if (!activity) throw new NotFoundException("Activity not found");

    return this.prisma.availability.create({
      data: {
        startsAt,
        endsAt,
        capacity: dto.capacity,
        remaining: dto.remaining,
        activity: { connect: { id: dto.activityId } },
      },
    });
  }

  async update(id: string, dto: UpdateAvailabilityDto) {
    const existing = await this.prisma.availability.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException("Availability not found");
    const startsAt = dto.startsAt ? new Date(dto.startsAt) : existing.startsAt;
    const endsAt = dto.endsAt ? new Date(dto.endsAt) : existing.endsAt;
    if (endsAt <= startsAt) throw new BadRequestException("endsAt must be after startsAt");
    if ((dto.remaining ?? existing.remaining) > (dto.capacity ?? existing.capacity)) throw new BadRequestException("remaining cannot exceed capacity");
    if (dto.activityId && !await this.prisma.activity.findUnique({ where: { id: dto.activityId }, select: { id: true } })) {
      throw new NotFoundException("Activity not found");
    }
    return this.prisma.availability.update({ where: { id }, data: { ...dto, startsAt, endsAt } });
  }

  async remove(id: string) {
    if (!await this.prisma.availability.findUnique({ where: { id }, select: { id: true } })) throw new NotFoundException("Availability not found");
    await this.prisma.availability.delete({ where: { id } });
    return { deleted: true };
  }

  async findForAdmin(activityId: string) {
    if (!await this.prisma.activity.findUnique({ where: { id: activityId }, select: { id: true } })) throw new NotFoundException("Activity not found");
    return this.prisma.availability.findMany({ where: { activityId }, orderBy: { startsAt: "asc" }, take: 500 });
  }

  async findByActivityId(activityId: string) {
    const activity = await this.prisma.activity.findUnique({
      where: { id: activityId },
    });

    if (!activity || activity.status !== "PUBLISHED") {
      throw new NotFoundException("Activity not found");
    }

    return this.prisma.availability.findMany({
      where: { activityId, ...publicRelations().availabilities.where },
      orderBy: { startsAt: "asc" },
    });
  }
}
