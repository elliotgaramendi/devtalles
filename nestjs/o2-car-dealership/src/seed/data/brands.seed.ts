import { randomUUID } from 'node:crypto';

import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: randomUUID(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: randomUUID(),
    name: 'Toyota',
    createdAt: new Date().getTime(),
  },
  {
    id: randomUUID(),
    name: 'Honda',
    createdAt: new Date().getTime(),
  },
  {
    id: randomUUID(),
    name: 'Jeep',
    createdAt: new Date().getTime(),
  },
  {
    id: randomUUID(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
];
