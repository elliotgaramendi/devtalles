import { useEffect, useState } from 'react';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';


const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);


  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    setIsLoading(true);
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    setNowPlaying(nowPlayingMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
  };
};

export default useMovies;
