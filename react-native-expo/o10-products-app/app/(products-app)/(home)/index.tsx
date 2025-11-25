import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { View } from 'react-native';
const HomeScreen = () => {
  const primary = useThemeColor({}, 'primary');

  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
      <ThemedText style={{ fontFamily: 'Kanit-Bold', color: primary }}>
        HomeScreen
      </ThemedText>
      <ThemedText style={{ fontFamily: 'Kanit-Regular' }}>HomeScreen</ThemedText>
      <ThemedText style={{ fontFamily: 'Kanit-Thin' }}>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
    </View>
  );
};
export default HomeScreen;
