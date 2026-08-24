import { Module } from '@nestjs/common';

import { BrandsModule } from '../brands/brands.module';
import { CarsModule } from '../cars/cars.module';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
