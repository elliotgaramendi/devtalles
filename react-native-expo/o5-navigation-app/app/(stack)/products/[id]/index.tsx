import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { products } from '@/shared/mocks/products.mock';

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: product.title,
          headerTitleStyle: {
            fontFamily: 'work-black',
            fontSize: 18,
          }
        }}
      />
      <ScrollView className="flex-1 bg-gradient-to-b from-slate-900 to-slate-800">
        <View className="px-6 py-8">
          <View className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-6 border border-white/10">
            <Text className="font-work-black text-3xl text-app-white text-center leading-tight mb-4">
              {product.title}
            </Text>
          </View>

          <View className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
            <View className="flex-row items-center mb-4">
              <View className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
              <Text className="text-lg font-work-black text-app-white">Description</Text>
            </View>
            <Text className="text-app-white/90 text-base leading-relaxed font-light">
              {product.description}
            </Text>
          </View>

          <View className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-app-white/70 text-sm mb-1">Price</Text>
                <Text className="font-work-black text-3xl text-app-white">
                  {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </Text>
              </View>
              <View className="w-16 h-16 bg-white/10 rounded-full items-center justify-center">
                <View className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetailsScreen;