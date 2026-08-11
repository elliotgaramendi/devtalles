import axios from 'axios';

import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {
  public readonly id: number;
  public name: string;

  constructor(
    id: number,
    name: string,
  ) {
    this.id = id;
    this.name = name;
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
    const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
    console.log(data.moves);

    return data.moves;
  }
}

export const instantiatedCharmander = new Pokemon(4, 'Charmander');

instantiatedCharmander.getMoves();
