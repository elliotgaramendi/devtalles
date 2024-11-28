/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { componentStyles, elementStyles, utilStyles } from '../../../styles/styles';
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
    return (
      <View style={[componentStyles.section]}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Text
        onPress={() => navigation.goBack()}
        style={[elementStyles.title, utilStyles.pAbsolute, utilStyles.top2, utilStyles.left2, utilStyles.zIndex1]}
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
