import { type HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { type MovieDBMovieResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { MovieDetails } from '../../entities/movie.entity';

export const movieDetailsUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<MovieDetails> => {
  try {
    const details = await fetcher.get<MovieDBMovieResponse>(`/${movieId}`);
    return MovieMapper.fromMovieDetailsDBResultToEntity(details);
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching movies - Details: ${error}`);
  }
};
