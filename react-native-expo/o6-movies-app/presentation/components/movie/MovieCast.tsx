import { Cast } from '@/infrastructure/interfaces/cast';
import { FlatList, Text, View } from 'react-native';
import { ActorCard } from './ActorCard';

interface Props {
  cast: Cast[];
}

const MovieCast = ({ cast }: Props) => {
  return (
    <View className="py-4">
      <View className="container mx-auto px-4 gap-2">
        <Text className="text-app-white font-bold text-xl">Actors</Text>
        <FlatList
          data={cast}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ActorCard actor={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8 }}
        />
      </View>
    </View>
  );
};
export default MovieCast;