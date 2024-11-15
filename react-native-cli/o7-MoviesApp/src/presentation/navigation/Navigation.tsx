/* eslint-disable react/react-in-jsx-scope */
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from '../screens/details/DetailsScreen';
import HomeScreen from '../screens/home/HomeScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: { movieId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
