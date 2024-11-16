import { useEffect, useState } from 'react';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { Movie } from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';


const useMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);


  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    setIsLoading(true);
    const [nowPlayingData, popularData] = await Promise.all([
      UseCases.moviesNowPlayingUseCase(movieDBFetcher),
      UseCases.moviesPopularUseCase(movieDBFetcher),
    ]);
    setNowPlaying(nowPlayingData);
    setPopular(popularData);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
  };
};

export default useMovies;
