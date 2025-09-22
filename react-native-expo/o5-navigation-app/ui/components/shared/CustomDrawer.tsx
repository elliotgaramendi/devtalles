import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View className="flex items-center justify-center h-40 mb-10 rounded-xl bg-primary">
        <View className="flex items-center justify-center w-24 h-24 rounded-full bg-app-white">
          <Text className="text-primary font-work-black text-3xl">EG</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;