import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-work-black text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Text className="text-xl font-work-bold text-primary">
        This is a app
      </Text>
      <Text className="text-lg font-work-light text-secondary">
        With react-native
      </Text>
      <Text className="text-md font-work-medium text-secondary-100">
        And react-native
      </Text>
      <Text className="text-sm font-work-regular text-tertiary">
        I love this app
      </Text>
    </View>
  );
}
