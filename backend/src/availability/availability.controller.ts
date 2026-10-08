import { AdminApiKeyGuard } from "../auth/admin-api-key.guard.js";
import { Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Body, UseGuards } from "@nestjs/common";
import { AvailabilityService } from "./availability.service.js";
import { CreateAvailabilityDto } from "./dto/create-availability.dto.js";
import { UpdateAvailabilityDto } from "./dto/update-availability.dto.js";

@Controller("availability")
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Post()
  @UseGuards(AdminApiKeyGuard)
  create(@Body() dto: CreateAvailabilityDto) {
    return this.availabilityService.create(dto);
  }

  @Get("activity/:activityId")
  findByActivity(@Param("activityId", ParseUUIDPipe) activityId: string) {
    return this.availabilityService.findByActivityId(activityId);
  }

  @Get("admin/activity/:activityId")
  @UseGuards(AdminApiKeyGuard)
  findForAdmin(@Param("activityId", ParseUUIDPipe) activityId: string) { return this.availabilityService.findForAdmin(activityId); }

  @Patch(":id")
  @UseGuards(AdminApiKeyGuard)
  update(@Param("id", ParseUUIDPipe) id: string, @Body() dto: UpdateAvailabilityDto) { return this.availabilityService.update(id, dto); }

  @Delete(":id")
  @UseGuards(AdminApiKeyGuard)
  remove(@Param("id", ParseUUIDPipe) id: string) { return this.availabilityService.remove(id); }
}
