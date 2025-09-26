import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { styleVariables } from "@/styles/styles";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator color={styleVariables.primaryColor} size={styleVariables.size * 8} />
      </View>
    );
  }

  return (
    <ScrollView style={{ paddingTop: safeArea.top, paddingBottom: safeArea.bottom }}>
      <MainSlideshow movies={nowPlayingQuery.data ?? []} />
      <MovieHorizontalList
        title="Popular"
        movies={popularQuery.data ?? []}
      />
      <MovieHorizontalList
        title="Top Rated"
        movies={topRatedQuery.data?.pages.flat() ?? []}
        loadNextPage={topRatedQuery.fetchNextPage}
      />
      <MovieHorizontalList
        title="Upcoming"
        movies={upcomingQuery.data ?? []}
      />
    </ScrollView>
  );
}
