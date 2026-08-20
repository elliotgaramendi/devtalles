import { IsString } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString()
  readonly model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }
}
