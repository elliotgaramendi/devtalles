/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Menu from '../components/Menu';
import HomeScreen from '../screens/stacks/HomeScreen';
import ProductScreen from '../screens/stacks/ProductScreen';
import ProductsScreen from '../screens/stacks/ProductsScreen';
import SettingsScreen from '../screens/stacks/SettingsScreen';
import {primaryBackground} from '../styles/styles';

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Product: {id: number; name: string};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <>
      <Menu />
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: primaryBackground},
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
}

export default MyStack;
