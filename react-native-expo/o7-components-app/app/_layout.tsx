import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemeChangerProvider } from '@/presentation/context/ThemeChangerContext';
import { useEffect } from 'react';
import '../global.css';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: { backgroundColor, },
            headerStyle: { backgroundColor },
            headerTintColor: textColor,
          }}
        >
          <Stack.Screen
            name="index"
            options={{ title: 'Home' }}
          />
          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
              }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
