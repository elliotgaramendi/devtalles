import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-work-black text-blue-500">
        ProductsScreen
      </Text>
    </SafeAreaView>
  );
}

export default ProductsScreen;