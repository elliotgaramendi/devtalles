import AppButton from '@/ui/components/shared/AppButton';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-2">
      <Link href="/products" asChild>
        <AppButton
          onPress={() => {
            console.log("Go to products");
          }}
        >
          Products
        </AppButton>
      </Link>
      <Link href="/profile" asChild>
        <AppButton
          variant="primary"
          onPress={() => {
            console.log("Go to profile");
          }}
        >
          Profile
        </AppButton>
      </Link>
      <Link href="/settings" asChild>
        <AppButton
          variant="secondary"
          onPress={() => {
            console.log("Go to settings");
          }}
        >
          Settings
        </AppButton>
      </Link>
      <AppButton
        variant="outline-primary"
        onPress={() => {
          router.push("/profile");
        }}
      >
        Profile
      </AppButton>
    </SafeAreaView>
  );
};

export default HomeScreen;