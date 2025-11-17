import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/presentation/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" options={{ animation: 'none' }} />
        <Stack.Screen name="loading/index" options={{ animation: 'none' }} />
        <Stack.Screen name="map/index" options={{ animation: 'fade' }} />
        <Stack.Screen name="permissions/index" options={{ animation: 'fade' }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
