import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from "expo-router";
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import '../styles/global.css';

const queryClient = new QueryClient();

export default function RootLayout() {
  const safeArea = useSafeAreaInsets();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            marginTop: safeArea.top,
            backgroundColor: '#fefefe'
          }
        }}
      />
    </QueryClientProvider>
  );
}
