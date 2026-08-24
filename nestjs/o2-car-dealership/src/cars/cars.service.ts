import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: randomUUID(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: randomUUID(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: randomUUID(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: randomUUID(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const carDB = this.findOneById(id);

    const changes = Object.fromEntries(
      Object.entries(updateCarDto).filter(([, value]) => value !== undefined),
    ) as Partial<Car>;

    const updatedCar: Car = {
      ...carDB,
      ...changes,
    };

    this.cars = this.cars.map((car) => (car.id === id ? updatedCar : car));

    return updatedCar;
  }

  delete(id: string) {
    const carDB = this.findOneById(id);

    const newCars = this.cars.filter((car) => car.id !== carDB.id);

    this.cars = newCars;

    return carDB;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = [...cars];
  }
}
