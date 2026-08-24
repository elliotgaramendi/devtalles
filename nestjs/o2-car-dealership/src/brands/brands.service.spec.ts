import { Test, TestingModule } from '@nestjs/testing';

import { BrandsService } from './brands.service';

describe('BrandsService', () => {
  let service: BrandsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandsService],
    }).compile();

    service = module.get<BrandsService>(BrandsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all brands', () => {
    expect(service.findAll()).toHaveLength(1);
    expect(service.findAll()[0].name).toBe('Toyota');
  });

  it('should return one brand', () => {
    const brand = service.findAll()[0];

    expect(service.findOne(brand.id)).toEqual(brand);
  });

  it('should create a brand', () => {
    const brand = service.create({ name: 'Nissan' });

    expect(brand.id).toEqual(expect.any(String));
    expect(brand.name).toBe('Nissan');
  });

  it('should update a brand', () => {
    const brand = service.findAll()[0];

    const updatedBrand = service.update(brand.id, { name: 'Honda' });

    expect(updatedBrand.name).toBe('Honda');
    expect(updatedBrand.updatedAt).toEqual(expect.any(Number));
  });

  it('should delete a brand', () => {
    const brand = service.findAll()[0];

    expect(service.remove(brand.id)).toEqual(brand);
    expect(service.findAll()).toHaveLength(0);
  });
});
