/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from '../components/IonIcon';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import {
  primaryBackground,
  primaryColor,
  primaryText,
  size,
} from '../styles/styles';
import MyStack from './MyStack';
import MyTopTabs from './MyTopTabs';

const Tab = createBottomTabNavigator();

function MyBottomTabs() {
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
      <Tab.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => (
            <IonIcon name="home-outline" size={24} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TTabs"
        options={{
          title: 'TTabs',
          tabBarIcon: ({color}) => (
            <IonIcon name="grid-outline" size={24} color={color} />
          ),
        }}
        component={MyTopTabs}
      />
      <Tab.Screen
        name="Stack"
        options={{
          title: 'Stack',
          tabBarIcon: ({color}) => (
            <IonIcon name="list-outline" size={24} color={color} />
          ),
        }}
        component={MyStack}
      />
    </Tab.Navigator>
  );
}

export default MyBottomTabs;
