/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  componentStyles
} from '../../../styles/styles';
import MovieCarousel from '../../components/movies/MovieCarousel';
import PosterCarousel from '../../components/movies/PosterCarousel';
import useMovies from '../../hooks/useMovies';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular, topRated, upcoming } = useMovies();

  if (isLoading) {
    return (
      <View style={[componentStyles.section]}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ marginTop: top }}>
      <PosterCarousel movies={nowPlaying} />
      <MovieCarousel title="Popular" movies={popular} />
      <MovieCarousel title="Top rated" movies={topRated} />
      <MovieCarousel title="Upcoming" movies={upcoming} />
    </ScrollView>
  );
};

export default HomeScreen;
