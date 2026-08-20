import { IsOptional, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsOptional()
  @IsString()
  readonly brand?: string;

  @IsOptional()
  @IsString()
  readonly model?: string;
}
