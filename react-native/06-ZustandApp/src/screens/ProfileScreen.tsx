/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {componentStyles, elementStyles, layoutStyles} from '../styles/styles';

const ProfileScreen = () => {
  return (
    <View style={componentStyles.section}>
      <View style={layoutStyles.container}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          ProfileScreen
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
