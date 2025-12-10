import ProductList from '@/presentation/products/components/ProductList';
import { useProducts } from '@/presentation/products/hooks/useProducts';
import { FAB } from '@/presentation/theme/components/FAB';
import { router } from 'expo-router';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

const HomeScreen = () => {
  const { productsQuery, loadNextPage } = useProducts();

  if (productsQuery.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={30} />
      </View>
    );
  }

  return (
    <View style={{ paddingHorizontal: 10, ...StyleSheet.absoluteFillObject }}>
      <ProductList
        products={productsQuery.data?.pages.flatMap((page) => page) ?? []}
        loadNextPage={loadNextPage}
      />

      <FAB
        iconName="add-outline"
        onPress={() => router.push('/(products-app)/product/new')}
      />
    </View>
  );
};

export default HomeScreen;
