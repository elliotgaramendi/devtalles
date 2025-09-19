import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex-1 py-8">
      <View className="container mx-auto px-4 flex-1 items-center justify-center gap-2">
        <Text className="text-primary text-2xl font-work-black">
          ProfileScreen
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default ProfileScreen;