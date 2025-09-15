import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-2 bg-white">
      <Link href="/products" className="text-xl font-work-black text-blue-500">
        Products
      </Link>
      <Link href="/profile" className="text-xl font-work-black text-blue-500">
        Profile
      </Link>
      <Link href="/settings" className="text-xl font-work-black text-blue-500">
        Settings
      </Link>
    </SafeAreaView>
  );
}

export default HomeScreen;