import { AdminApiKeyGuard } from "../auth/admin-api-key.guard.js";
import { Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Body, UseGuards } from "@nestjs/common";
import { PricingService } from "./pricing.service.js";
import { CreatePriceDto } from "./dto/create-price.dto.js";
import { UpdatePriceDto } from "./dto/update-price.dto.js";

@Controller("pricing")
export class PricingController {
  constructor(private readonly pricingService: PricingService) {}

  @Post()
  @UseGuards(AdminApiKeyGuard)
  create(@Body() dto: CreatePriceDto) {
    return this.pricingService.create(dto);
  }

  @Get("activity/:activityId")
  findByActivity(@Param("activityId", ParseUUIDPipe) activityId: string) {
    return this.pricingService.findByActivityId(activityId);
  }

  @Get("admin/activity/:activityId")
  @UseGuards(AdminApiKeyGuard)
  findForAdmin(@Param("activityId", ParseUUIDPipe) activityId: string) { return this.pricingService.findForAdmin(activityId); }

  @Patch(":id")
  @UseGuards(AdminApiKeyGuard)
  update(@Param("id", ParseUUIDPipe) id: string, @Body() dto: UpdatePriceDto) { return this.pricingService.update(id, dto); }

  @Delete(":id")
  @UseGuards(AdminApiKeyGuard)
  remove(@Param("id", ParseUUIDPipe) id: string) { return this.pricingService.remove(id); }
}
