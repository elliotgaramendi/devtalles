import { useEffect, useState } from 'react';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { MovieDetails } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';

const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<MovieDetails>();


  useEffect(() => {
    loadMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const movieDetails = await UseCases.movieDetailsUseCase(movieDBFetcher, movieId);
    setMovie(movieDetails);
    setIsLoading(false);
  };

  return {
    isLoading,
    movie,
  };
};

export default useMovie;
