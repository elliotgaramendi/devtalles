/* eslint-disable react/react-in-jsx-scope */
import {StackActions, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {
  blackColor,
  componentStyles,
  elementStyles,
  layoutStyles,
  utilStyles,
} from '../../styles/styles';

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap2]}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          Settings
        </Text>
        <View style={utilStyles.gap2}>
          <CustomButton
            content="Back"
            contentColor={blackColor}
            type="buttonIsPrimary"
            onPress={() => navigation.goBack()}
          />
          <CustomButton
            content="Home"
            contentColor={blackColor}
            type="buttonIsPrimary"
            onPress={() => navigation.dispatch(StackActions.popToTop())}
          />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
