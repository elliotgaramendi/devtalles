import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { styleVariables } from '@/styles/styles';
import '../styles/global.css';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: styleVariables.blackColor },
        }}
      />
    </QueryClientProvider>
  );
}
