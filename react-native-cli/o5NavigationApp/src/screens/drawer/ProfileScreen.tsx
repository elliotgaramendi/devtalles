/* eslint-disable react/react-in-jsx-scope */
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import {
  blackColor,
  componentStyles,
  elementStyles,
  layoutStyles,
  utilStyles,
} from '../../styles/styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap2]}>
        <Text
          style={[
            elementStyles.title,
            elementStyles.titleIsXS,
            {marginTop: top},
          ]}>
          Profile
        </Text>
        <CustomButton
          content="Menu"
          contentColor={blackColor}
          type="buttonIsPrimary"
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
