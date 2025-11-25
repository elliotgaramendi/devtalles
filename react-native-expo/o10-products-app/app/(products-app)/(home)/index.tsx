import { ThemedText } from '@/presentation/theme/components/themed-text';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { View } from 'react-native';

const HomeScreen = () => {
  const primary = useThemeColor({}, 'tint');

  return (
    <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
      <ThemedText style={{ fontFamily: 'KanitBold', color: primary }}>
        HomeScreen
      </ThemedText>
      <ThemedText style={{ fontFamily: 'KanitRegular' }}>HomeScreen</ThemedText>
      <ThemedText style={{ fontFamily: 'KanitThin' }}>HomeScreen</ThemedText>
      <ThemedText>HomeScreen</ThemedText>
    </View>
  );
};
export default HomeScreen;
