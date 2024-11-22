/* eslint-disable react/react-in-jsx-scope */
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { componentStyles } from '../../../styles/styles';
import PosterCarousel from '../../components/movies/PosterCarousel';
import useMovies from '../../hooks/useMovies';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying } = useMovies();

  if (isLoading) {
    return (
      <View style={[componentStyles.section]}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={[componentStyles.section, { marginTop: top }]}>
        <PosterCarousel movies={nowPlaying} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
