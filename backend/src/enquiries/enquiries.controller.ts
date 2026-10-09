import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import type { Request } from "express";
import { AdminApiKeyGuard } from "../auth/admin-api-key.guard.js";
import { EnquiriesService } from "./enquiries.service.js";
import { CreateEnquiryDto } from "./dto/create-enquiry.dto.js";
import { ListEnquiriesDto, UpdateEnquiryDto } from "./dto/manage-enquiry.dto.js";

@Controller("enquiries")
export class EnquiriesController {
  constructor(private readonly service: EnquiriesService) {}

  @Post()
  create(@Body() dto: CreateEnquiryDto, @Req() request: Request) {
    return this.service.create(dto, request.ip || request.socket.remoteAddress || "unknown");
  }

  @Get()
  @UseGuards(AdminApiKeyGuard)
  list(@Query() query: ListEnquiriesDto) { return this.service.list(query); }

  @Patch(":id")
  @UseGuards(AdminApiKeyGuard)
  update(@Param("id", ParseUUIDPipe) id: string, @Body() dto: UpdateEnquiryDto) { return this.service.update(id, dto); }
}
