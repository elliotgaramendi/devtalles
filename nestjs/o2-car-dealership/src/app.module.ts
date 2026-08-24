import { Module } from '@nestjs/common';

import { BrandsModule } from './brands/brands.module';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
