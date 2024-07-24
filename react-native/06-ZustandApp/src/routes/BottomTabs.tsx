/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
  primaryBackground,
  primaryColor,
  primaryText,
  size,
} from '../styles/styles';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: primaryBackground}}
      screenOptions={{
        headerTintColor: primaryText,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          backgroundColor: primaryBackground,
        },
        tabBarActiveTintColor: primaryColor,
        tabBarLabelStyle: {marginBottom: size},
        tabBarStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          borderTopWidth: 0,
          backgroundColor: primaryBackground,
        },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabs;
