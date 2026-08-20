import { Test, TestingModule } from '@nestjs/testing';

import { CarsService } from './cars.service';

describe('CarsService', () => {
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarsService],
    }).compile();

    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all cars', () => {
    expect(service.findAll()).toHaveLength(3);
  });

  it('should return one car', () => {
    const car = service.findAll()[0];

    expect(service.findOneById(car.id)).toEqual(car);
  });

  it('should create a car', () => {
    const car = service.create({ brand: 'Audi', model: 'A4' });

    expect(car.id).toEqual(expect.any(String));
    expect(car.brand).toBe('Audi');
    expect(car.model).toBe('A4');
  });

  it('should update a car', () => {
    const car = service.findAll()[0];

    const updatedCar = service.update(car.id, { brand: 'Audi' });

    expect(updatedCar.brand).toBe('Audi');
    expect(updatedCar.model).toBe(car.model);
  });

  it('should delete a car', () => {
    const car = service.findAll()[0];

    expect(service.delete(car.id)).toEqual(car);
    expect(service.findAll()).toHaveLength(2);
  });
});
