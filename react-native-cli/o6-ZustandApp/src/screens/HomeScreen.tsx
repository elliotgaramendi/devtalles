/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useProfileStore} from '../store/profile.store';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
  utilStyles,
} from '../styles/styles';

const HomeScreen = () => {
  const {name, changeProfile} = useProfileStore();
  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap2]}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          {name}
        </Text>
        <CustomButton
          content="Change name"
          onPress={() => useProfileStore.setState({name: 'Leo'})}
          type="buttonIsPrimary"
        />
        <CustomButton
          content="Change profile"
          onPress={() => changeProfile('Leo Sarmiento', 'lsarmiento@gmail.com')}
          type="buttonIsPrimary"
        />
        <CustomButton
          content="Reset profile"
          onPress={() =>
            changeProfile('Elliot Garamendi', 'elliotgaramendi@gmail.com')
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
