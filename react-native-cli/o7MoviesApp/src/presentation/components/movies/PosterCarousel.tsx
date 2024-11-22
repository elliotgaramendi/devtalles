/* eslint-disable react/react-in-jsx-scope */
import { ScrollView } from 'react-native-gesture-handler';
import { Movie } from '../../../core/entities/movie.entity';
import { size, utilStyles } from '../../../styles/styles';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

const PosterCarousel = ({ movies, height = size * 100 }: Props) => {
  return (
    <ScrollView
      style={[{ height }, utilStyles.py2]}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {movies.map((item) => <MoviePoster key={item.id} movie={item} />)}
    </ScrollView>
  );
};

export default PosterCarousel;
