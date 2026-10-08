import { EnquiryStatus } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsInt, IsOptional, Max, Min } from "class-validator";

export class ListEnquiriesDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit = 25;

  @IsOptional()
  @IsEnum(EnquiryStatus)
  status?: EnquiryStatus;
}

export class UpdateEnquiryDto {
  @IsEnum(EnquiryStatus)
  status!: EnquiryStatus;
}
