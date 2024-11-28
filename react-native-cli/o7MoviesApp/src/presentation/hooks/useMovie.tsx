import { useEffect, useState } from 'react';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { MovieCast, MovieDetails } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';

const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<MovieDetails>();
  const [movieCast, setMovieCast] = useState<MovieCast[]>();


  const loadMovie = async () => {
    setIsLoading(true);
    const movieDetailsPromise = UseCases.movieDetailsUseCase(movieDBFetcher, movieId);
    const movieCastPromise = UseCases.movieCastUseCase(movieDBFetcher, movieId);
    const [movieDetailsData, movieCastData] = await Promise.all([movieDetailsPromise, movieCastPromise]);
    setMovie(movieDetailsData);
    setMovieCast(movieCastData);
    setIsLoading(false);
  };

  useEffect(() => {
    loadMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return {
    isLoading,
    movie,
    movieCast,
  };
};

export default useMovie;
