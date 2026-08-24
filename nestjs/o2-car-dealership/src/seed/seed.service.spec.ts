import { Test, TestingModule } from '@nestjs/testing';

import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { SeedService } from './seed.service';

describe('SeedService', () => {
  let service: SeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeedService, CarsService, BrandsService],
    }).compile();

    service = module.get<SeedService>(SeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
