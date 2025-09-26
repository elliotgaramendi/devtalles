import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MovieHeader from '@/presentation/components/movie/MovieHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { styleVariables } from '@/styles/styles';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(Number(id));

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 items-center justify-center">
        <Text className="mb-4">Loading movie...</Text>
        <ActivityIndicator color={styleVariables.primaryColor} size={styleVariables.size * 8} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};
export default MovieScreen;
