import { Test, TestingModule } from '@nestjs/testing';

import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';

describe('SeedController', () => {
  let controller: SeedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeedController],
      providers: [SeedService, CarsService, BrandsService],
    }).compile();

    controller = module.get<SeedController>(SeedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
