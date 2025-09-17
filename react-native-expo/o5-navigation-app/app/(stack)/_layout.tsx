import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#010508'
        },
        headerTintColor: '#23B5E8',
        headerTitleStyle: {
          color: '#fefefe',
          fontFamily: 'WorkSans-Black',
          fontSize: 24
        },
        contentStyle: {
          backgroundColor: '#010508'
        }
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Home',
        }} />
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Products',
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Settings',
        }}
      />
    </Stack>
  );
}

export default StackLayout;