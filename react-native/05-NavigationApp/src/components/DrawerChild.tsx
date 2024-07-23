/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {primaryColor, size} from '../styles/styles';

const DrawerChild = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          width: 200,
          height: 200,
          marginVertical: size * 4,
          marginHorizontal: 'auto',
          borderRadius: 100,
          backgroundColor: primaryColor,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default DrawerChild;
