/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useWindowDimensions} from 'react-native';
import DrawerChild from '../components/DrawerChild';
import IonIcon from '../components/IonIcon';
import ProfileScreen from '../screens/drawer/ProfileScreen';
import {
  blackColor,
  borderRadius,
  primaryBackground,
  primaryColor,
  primaryText,
} from '../styles/styles';
import MyBottomTabs from './MyBottomTabs';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerChild {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: primaryColor,
        drawerActiveTintColor: blackColor,
        drawerInactiveTintColor: primaryText,
        drawerItemStyle: {borderRadius: borderRadius},
        drawerStyle: {backgroundColor: primaryBackground},
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',
        headerShown: false,
      }}>
      <Drawer.Screen
        name="MyBottomTabs"
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="pricetags-outline" size={24} color={color} />
          ),
        }}
        component={MyBottomTabs}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="person-outline" size={24} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
