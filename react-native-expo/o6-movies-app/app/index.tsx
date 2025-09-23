import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, View } from "react-native";

export default function Index() {
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }

  return (
    <ScrollView>
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
      <MovieHorizontalList
        title="Popular"
        movies={popularQuery.data ?? []}
      />
      <MovieHorizontalList
        title="Best rated"
        movies={topRatedQuery.data ?? []}
      />
      <MovieHorizontalList
        title="Upcoming"
        movies={upcomingQuery.data ?? []}
      />
    </ScrollView>
  );
}
