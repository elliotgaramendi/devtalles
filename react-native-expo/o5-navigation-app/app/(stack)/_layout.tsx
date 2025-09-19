import { styleVariables } from '@/styles/styles';
import { Stack } from 'expo-router';

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: styleVariables.blackColor
        },
        headerTintColor: styleVariables.primaryColor,
        headerTitleStyle: {
          color: styleVariables.whiteColor,
          fontFamily: 'WorkSans-Black',
          fontSize: styleVariables.size * 6
        },
        contentStyle: {
          backgroundColor: styleVariables.blackColor
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