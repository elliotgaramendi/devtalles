import AppButton from '@/ui/components/shared/AppButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { View } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <View className="flex-1 py-8">
      <View className="container mx-auto px-4 flex-1 items-center justify-center gap-2">
        <Link href="./products" asChild>
          <AppButton
            variant='primary'
            onPress={() => {
              console.log("Go to products");
            }}
          >
            Products
          </AppButton>
        </Link>
        <Link href="./profile" asChild>
          <AppButton
            variant="secondary"
            onPress={() => {
              console.log("Go to profile");
            }}
          >
            Profile
          </AppButton>
        </Link>
        <AppButton
          variant="outline-primary"
          onPress={() => {
            router.push("./settings");
          }}
        >
          Settings
        </AppButton>
        <AppButton
          onPress={onToggleDrawer}
        >
          Toggle Drawer
        </AppButton>
      </View>
    </View>
  );
};

export default HomeScreen;