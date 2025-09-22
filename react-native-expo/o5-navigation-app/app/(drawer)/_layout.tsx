import { styleVariables } from '@/styles/styles';
import CustomDrawer from '@/ui/components/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';

const DrawerLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
          drawerActiveBackgroundColor: styleVariables.primaryColor,
          drawerActiveTintColor: styleVariables.blackColor,
          drawerInactiveTintColor: styleVariables.neutral200,
          drawerStyle: { backgroundColor: styleVariables.blackColor, },
          headerStyle: { backgroundColor: styleVariables.blackColor },
          headerTintColor: styleVariables.primaryColor,
          headerTitleStyle: { color: styleVariables.primaryColor },
          sceneStyle: { backgroundColor: styleVariables.blackColor },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            drawerLabel: 'Tabs',
            title: 'Tabs',
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons size={size} name="albums" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="user/index"
          options={{
            drawerLabel: 'User',
            title: 'Users',
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons size={size} name="person" color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="schedule/index"
          options={{
            drawerLabel: 'Schedule',
            title: 'Schedule',
            drawerIcon: ({ color, size }: { color: string; size: number }) => (
              <Ionicons size={size} name="calendar" color={color} />
            ),
          }}
        />
      </Drawer>
    </>
  );
}

export default DrawerLayout;