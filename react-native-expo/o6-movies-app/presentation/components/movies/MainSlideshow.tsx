import { useRef } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
}

const MainSlideshow = ({ movies }: Props) => {
  const ref = useRef(null);
  const width = useWindowDimensions().width;

  return (
    <View className="py-4">
      <View className="container mx-auto px-4 items-center justify-center gap-2">
        <Text className="text-4xl font-bold">MoviesApp</Text>
      </View>
      <Carousel
        ref={ref}
        width={160}
        height={360}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        style={{
          width: width,
          height: 256,
          justifyContent: 'center',
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
      />
    </View>
  );
};
export default MainSlideshow;