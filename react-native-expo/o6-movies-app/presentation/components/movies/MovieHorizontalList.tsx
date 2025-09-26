import { useEffect, useRef } from 'react';
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View
} from 'react-native';

import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;
    const isEndReached = contentOffset.x + layoutMeasurement.width + 768 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;
    loadNextPage && loadNextPage();
  };

  useEffect(() => {
    isLoading.current = false
  }, [movies.length]);

  return (
    <View className="py-4">
      <View className="container mx-auto px-4">
        {title && <Text className="text-3xl font-bold">{title}</Text>}
      </View>
      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
export default MovieHorizontalList;