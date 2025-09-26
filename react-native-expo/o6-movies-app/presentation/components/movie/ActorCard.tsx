import { Cast } from '@/infrastructure/interfaces/cast';
import { Image, Text, View } from 'react-native';

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  return (
    <View className="w-24">
      <Image
        source={{ uri: actor.avatar }}
        className="h-32 rounded-2xl"
      />
      <View>
        <Text
          numberOfLines={2}
          className="font-bold"
        >
          {actor.name}
        </Text>
        <Text className="text-gray-400 text-xs">{actor.character}</Text>
      </View>
    </View>
  );
};