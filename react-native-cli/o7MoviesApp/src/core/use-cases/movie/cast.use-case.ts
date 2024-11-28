import { type HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { type MovieDBCreditsResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { MovieCast } from '../../entities/movie.entity';

export const movieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<MovieCast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCreditsResponse>(`/${movieId}/credits`);
    return cast.map(MovieMapper.fromMovieCastDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error(`Error fetching movie cast: ${error}`);
  }
};
