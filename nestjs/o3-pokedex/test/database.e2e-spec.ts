import { INestApplication } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Connection } from 'mongoose';

import { AppModule } from './../src/app.module';

describe('Database connection (e2e)', () => {
  let app: INestApplication;
  let connection: Connection;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    connection = app.get<Connection>(getConnectionToken());
  });

  it('connects to the pokedex database', () => {
    expect(connection.readyState).toBe(1);
    expect(connection.db?.databaseName).toBe('pokedex');
  });

  afterAll(async () => {
    await app.close();
  });
});
