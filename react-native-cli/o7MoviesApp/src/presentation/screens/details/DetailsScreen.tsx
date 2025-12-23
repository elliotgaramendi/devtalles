/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { elementStyles, utilStyles } from '../../../styles/styles';
import ScreenLoader from '../../components/loaders/ScreenLoader';
import MovieDetail from '../../components/movie/MovieDetail';
import MovieHeader from '../../components/movie/MovieHeader';
import useMovie from '../../hooks/useMovie';
import { RootStackParamList } from '../../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> { }

const DetailsScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const navigation = useNavigation();
  const { isLoading, movie, movieCast } = useMovie(movieId);


  if (isLoading || movie === undefined || movieCast === undefined) {
    return <ScreenLoader />;
  }

  return (
    <>
      <Text
        onPress={() => navigation.goBack()}
        style={[elementStyles.title, utilStyles.pAbsolute, utilStyles.top14, utilStyles.left2, utilStyles.zIndex1]}
      >
        ⬅️
      </Text>
      <ScrollView>
        <MovieHeader
          originalTitle={movie.originalTitle}
          title={movie.title}
          poster={movie.poster}
          rating={movie.rating}
          genres={movie.genres}
        />
        <MovieDetail movie={movie} movieCast={movieCast} />
      </ScrollView>
    </>
  );
};

export default DetailsScreen;
