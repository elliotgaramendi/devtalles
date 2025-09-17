import { Link } from 'expo-router';
import { FlatList, Text, View } from 'react-native';

import { products } from '@/shared/mocks/products.mock';

const ProductsScreen = () => {
  return (
    <View className="flex flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="mt-10">
            <Text className="text-2xl font-work-black text-app-white">{item.title}</Text>
            <Text className="text-app-white">{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black text-app-white">{item.price}</Text>
              <Link
                href={`/(stack)/products/${item.id}`}
                className="text-primary"
              >
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;