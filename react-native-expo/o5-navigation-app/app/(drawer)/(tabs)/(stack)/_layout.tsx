import { styleVariables } from '@/styles/styles';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'chevron-back' : 'menu'}
            color={tintColor}
            className="mr-5"
            size={styleVariables.size * 6}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
        headerBackVisible: false,
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
        },
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