/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../../../core/entities/movie.entity';
import { componentStyles, elementStyles, layoutStyles, size, utilStyles } from '../../../styles/styles';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
  loadNextPage?: () => void;
}

const MovieCarousel = ({ title, movies, loadNextPage }: Props) => {
  const isLoading = useRef(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) { return; }
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const almostAtEnd = contentOffset.x + layoutMeasurement.width >= contentSize.width - layoutMeasurement.width;
    if (almostAtEnd) {
      isLoading.current = true;
      loadNextPage && loadNextPage();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 1000);
  }, [movies]);

  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap4]}>
        <Text style={elementStyles.title}>{title}</Text>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MoviePoster movie={item} width={size * 36} height={size * 54} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
        />
      </View>
    </View>
  );
};

export default MovieCarousel;
