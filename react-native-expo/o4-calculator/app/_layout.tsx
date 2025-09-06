import { Slot } from "expo-router";
import { Text, View } from "react-native";

const RootLayout = () => {
  return (
    <View>
      <Text>RootLayout</Text>
      <Slot />
    </View>
  );
};

export default RootLayout;