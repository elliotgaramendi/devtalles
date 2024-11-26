/* eslint-disable react/react-in-jsx-scope */
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, Pressable } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { elementStyles, size, utilStyles } from '../../../styles/styles';
import { RootStackParamList } from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  width?: number;
  height?: number;
}

const MoviePoster = ({ movie, width = size * 64, height }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details', { movieId: movie.id })}
      style={({ pressed }) => [
        { width },
        height ? { height } : null,
        utilStyles.mx2,
        pressed && { opacity: 0.9 },
      ]}
    >
      <Image
        source={{ uri: movie.poster }}
        style={[elementStyles.image, elementStyles.imageIsPoster]}
      />
    </Pressable>
  );
};

export default MoviePoster;
