import { styleVariables } from '@/styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { Image, Pressable, Text, useWindowDimensions, View } from 'react-native';


interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({ poster, originalTitle, title }: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <View className="gap-5">
      <LinearGradient
        colors={['#01050880', 'transparent']}
        start={[0, 0]}
        style={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: screenHeight * 0.375
        }}
      />
      <Pressable
        className="absolute z-10 top-16 left-4"
        onPress={() => router.dismiss()}
      >
        <Ionicons
          name="chevron-back"
          size={styleVariables.size * 8}
          color="white"
          className="shadow"
        />
      </Pressable>
      <View
        style={{ height: screenHeight * 0.75 }}
        className="shadow-xl"
      >
        <Image
          source={{ uri: poster }}
          resizeMode="cover"
          className="flex-1 rounded-b-3xl"
        />
      </View>
      <View className="container mx-auto px-4">
        <Text className="text-app-white font-normal">{originalTitle}</Text>
        <Text className="text-app-white font-semibold text-2xl">{title}</Text>
      </View>
    </View>
  );
};
export default MovieHeader;