/* eslint-disable react/react-in-jsx-scope */
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Menu from '../components/Menu';
import ProfileScreen from '../screens/drawer/ProfileScreen';
import AboutScreen from '../screens/tabs/AboutScreen';
import {primaryBackground, primaryColor, primaryText} from '../styles/styles';

const Tab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <>
      <Menu />
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: primaryBackground}}
        screenOptions={{
          tabBarActiveTintColor: primaryText,
          tabBarIndicatorStyle: {backgroundColor: primaryColor},
          tabBarStyle: {
            elevation: 0,
            shadowColor: 'transparent',
            backgroundColor: primaryBackground,
          },
        }}>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
}

export default MyTopTabs;
