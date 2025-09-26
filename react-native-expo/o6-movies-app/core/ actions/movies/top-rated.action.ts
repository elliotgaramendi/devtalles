import { movieApi } from '@/core/api/movie-api';
import { MovieDBMoviesResponse } from '@/infrastructure/interfaces/moviedb-response';
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

interface Params {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({ page = 1, limit = 10, }: Params) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/movie/top_rated', {
      params: {
        page,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load top_rated movies';
  }
};