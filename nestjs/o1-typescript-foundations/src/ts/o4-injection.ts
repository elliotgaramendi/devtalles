import { AxiosAdapter, FetchAdapter, type HttpAdapter } from '../api/http.adapter';
import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  public readonly id: number;
  public name: string;
  private readonly http;

  constructor(
    id: number,
    name: string,
    http: HttpAdapter,
  ) {
    this.id = id;
    this.name = name;
    this.http = http;
  }

  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  scream() {
    const exclamation = `${this.name.slice(0, 4).toUpperCase()}!!!`;
    console.log(exclamation);
    return exclamation;
  }

  speak() {
    const greeting = `${this.name.slice(0, 4)}, ${this.name.slice(0, 4)}!!!`;
    console.log(`${this.name.slice(0, 4)}, ${this.name.slice(0, 4)}!!!`);
    return greeting;
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);

    return data.moves;
  }
}

const fetchAdapter = new FetchAdapter();
const axiosAdapter = new AxiosAdapter();

export const injectedCharmander = new Pokemon(4, 'Charmander', fetchAdapter);
export const injectedMew = new Pokemon(151, 'Mew', axiosAdapter);

injectedCharmander.getMoves();
injectedMew.getMoves();
