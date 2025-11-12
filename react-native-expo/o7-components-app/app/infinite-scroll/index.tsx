import { useThemeColor } from '@/hooks/use-theme-color';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
  const primaryColor = useThemeColor({}, 'primary');

  const loadMore = () => {
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator size={40} color={primaryColor} />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{
        height: 400,
        width: '100%',
      }}
    />
  );
};
