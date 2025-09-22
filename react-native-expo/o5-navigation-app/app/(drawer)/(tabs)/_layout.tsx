import { styleVariables } from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs
      // initialRouteName="(stack)"
      screenOptions={{
        headerShown: false,
        sceneStyle: { backgroundColor: styleVariables.blackColor, },
        tabBarActiveTintColor: styleVariables.primaryColor,
        tabBarInactiveTintColor: styleVariables.neutral200,
        tabBarStyle: { backgroundColor: styleVariables.blackColor, },
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <Ionicons size={styleVariables.size * 6} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="purchased/index"
        options={{
          title: 'Purchased',
          tabBarIcon: ({ color }) => <Ionicons size={styleVariables.size * 6} name="bag" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => <Ionicons size={styleVariables.size * 6} name="heart" color={color} />,
        }}
      />
    </Tabs>
  );
}

export default TabLayout;