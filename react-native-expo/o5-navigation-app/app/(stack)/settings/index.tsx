import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-2xl font-work-black text-blue-500">
        SettingsScreen
      </Text>
    </SafeAreaView>
  );
}

export default SettingsScreen;