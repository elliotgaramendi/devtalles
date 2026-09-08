interface PokeApiPokemon {
  name: string;
  url: string;
}

export interface PokeApiResponse {
  results: PokeApiPokemon[];
}
