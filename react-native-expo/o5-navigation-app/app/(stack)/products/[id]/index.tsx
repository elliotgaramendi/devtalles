import { Redirect, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

import { products } from '@/shared/mocks/products.mock';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl text-app-white">{product.title}</Text>
      <Text className="text-app-white">{product.description}</Text>
      <Text className="font-work-black text-app-white">{product.price}</Text>
    </View>
  );
};
export default ProductDetailsScreen;