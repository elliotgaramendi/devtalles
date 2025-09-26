import { Formatter } from '@/config/helpers/formatter';
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface';
import { Text, View } from 'react-native';

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View>
      <View className="container mx-auto px-4 gap-2">
        <Text>{movie.rating.toFixed(1)}/10 - {movie.genres.join(', ')}</Text>
        <View>
          <Text className="font-bold">History</Text>
          <Text className="font-normal">{movie.description}</Text>
        </View>
        <View>
          <Text className="font-bold">Budget</Text>
          <Text className="font-bold text-xl">{Formatter.currency(movie.budget)}</Text>
        </View>
      </View>
    </View>
  );
};
export default MovieDescription;