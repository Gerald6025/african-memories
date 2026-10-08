import { Transform } from "class-transformer";
import { IsEmail, IsString, IsUUID, Length, MaxLength, IsOptional } from "class-validator";

const trim = ({ value }: { value: unknown }) => typeof value === "string" ? value.trim() : value;

export class CreateEnquiryDto {
  @IsUUID("4")
  requestId!: string;

  @Transform(trim)
  @IsString()
  @Length(2, 120)
  name!: string;

  @Transform(({ value }: { value: unknown }) => typeof value === "string" ? value.trim().toLowerCase() : value)
  @IsEmail()
  @MaxLength(254)
  email!: string;

  @Transform(trim)
  @IsString()
  @Length(5, 40)
  phone!: string;

  @Transform(trim)
  @IsString()
  @Length(2, 160)
  destination!: string;

  @Transform(trim)
  @IsString()
  @Length(10, 5000)
  message!: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  website?: string;
}
