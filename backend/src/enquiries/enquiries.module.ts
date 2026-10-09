import { Module } from "@nestjs/common";
import { EnquiriesController } from "./enquiries.controller.js";
import { EnquiriesService } from "./enquiries.service.js";
import { EnquiryNotificationsService } from "./enquiry-notifications.service.js";

@Module({ controllers: [EnquiriesController], providers: [EnquiriesService, EnquiryNotificationsService] })
export class EnquiriesModule {}
