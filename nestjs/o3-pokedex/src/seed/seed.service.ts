import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { Pokemon } from '../pokemon/entities/pokemon.entity';
import { PokeApiResponse } from './interfaces/poke-api-response.interface';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=500';

@Injectable()
export class SeedService {
  constructor(
    private readonly httpAdapter: AxiosAdapter,
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async execute() {
    const data = await this.httpAdapter.get<PokeApiResponse>(POKE_API_URL);
    const operations = data.results.map(({ name, url }) => {
      const no = this.getPokemonNumber(url);

      return {
        updateOne: {
          filter: { no },
          update: { $set: { name, no } },
          upsert: true,
        },
      };
    });

    const result = await this.pokemonModel.bulkWrite(operations, {
      ordered: false,
    });

    return {
      matched: result.matchedCount,
      modified: result.modifiedCount,
      processed: operations.length,
      upserted: result.upsertedCount,
    };
  }

  private getPokemonNumber(url: string): number {
    const match = url.match(/\/([0-9]+)\/?$/);

    if (!match) {
      throw new Error(`Unable to extract the Pokémon number from "${url}"`);
    }

    return Number(match[1]);
  }
}
