import { FlatList, Text, View } from 'react-native';

import { products } from '@/shared/mocks/products.mock';
import { Link } from 'expo-router';

const ProductsScreen = () => {
  return (
    <View className="flex-1 py-8">
      <View className="container mx-auto px-4 flex-1 items-center justify-center gap-2">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link
              href={`./products/${item.id}`}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 mx-2 border border-white/20 shadow-lg"
            >
              <View className="flex flex-col gap-2">
                <Text className="text-2xl font-work-black text-app-white leading-tight">
                  {item.title}
                </Text>
                <Text className="text-app-white/80 text-base leading-relaxed font-light">
                  {item.description}
                </Text>
              </View>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default ProductsScreen;