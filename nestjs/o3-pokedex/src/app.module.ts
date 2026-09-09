import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { validateEnvironment } from './config/environment.validation';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      envFilePath: '.env',
      isGlobal: true,
      validate: validateEnvironment,
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        retryAttempts: 1,
        serverSelectionTimeoutMS: 5_000,
        uri: configService.getOrThrow<string>('MONGODB_URI'),
      }),
    }),
    CommonModule,
    PokemonModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
