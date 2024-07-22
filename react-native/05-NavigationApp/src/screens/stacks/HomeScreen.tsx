/* eslint-disable react/react-in-jsx-scope */
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import {type RootStackParamList} from '../../routes/MyStack';
import {
  blackColor,
  componentStyles,
  layoutStyles,
  utilStyles,
} from '../../styles/styles';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap2]}>
        <CustomButton
          content="Products"
          contentColor={blackColor}
          type="buttonIsPrimary"
          onPress={() => navigation.navigate('Products')}
        />
        <CustomButton
          content="Settings"
          contentColor={blackColor}
          type="buttonIsPrimary"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
