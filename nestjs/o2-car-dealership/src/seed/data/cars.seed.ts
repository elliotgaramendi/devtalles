import { randomUUID } from 'node:crypto';

import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
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
