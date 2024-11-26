/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../../../core/entities/movie.entity';
import { componentStyles, elementStyles, layoutStyles, size, utilStyles } from '../../../styles/styles';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
  height?: number;
}

const MovieCarousel = ({ title, movies }: Props) => {
  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap4]}>
        <Text style={elementStyles.title}>{title}</Text>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MoviePoster movie={item} width={size * 36} height={size * 50} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MovieCarousel;
