import type { Movie, MovieCast, MovieDetails } from '../../core/entities/movie.entity';
import type { Cast, MovieDBMovieIdResponse, Result } from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w400${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w400${result.backdrop_path}`,
    };
  }

  static fromMovieIdDBResultToEntity(result: MovieDBMovieIdResponse): MovieDetails {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      genres: result.genres.map((genre) => genre.name),
      duration: result.runtime,
      budget: result.budget,
      originalTitle: result.original_title,
      productionCompanies: result.production_companies.map((company) => company.name),
    };
  }

  static fromMovieCastDBResultToEntity(result: Cast): MovieCast {
    const { id, name, character, profile_path } = result;

    return {
      id,
      name,
      character: character || 'No character',
      avatar: profile_path ? `https://image.tmdb.org/t/p/w200${profile_path}` : 'https://i.sstatic.net/l60Hf.png',
    };
  }
}
