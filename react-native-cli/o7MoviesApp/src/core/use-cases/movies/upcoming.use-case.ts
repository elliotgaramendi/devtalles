import { type HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { type MovieDBMovieResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { type Movie } from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBMovieResponse>('/upcoming');
    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching movies - Upcoming: ${error}`);
  }
};
