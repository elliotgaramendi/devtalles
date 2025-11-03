import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { allRoutes } from '@/constants/Routes';
import { useThemeColor } from '@/hooks/use-theme-color';
import '../global.css';

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor }}>
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
    </GestureHandlerRootView>
  );
}
