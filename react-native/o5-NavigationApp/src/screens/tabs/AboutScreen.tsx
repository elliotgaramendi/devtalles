/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
} from '../../styles/styles';

const AboutScreen = () => {
  return (
    <View style={componentStyles.section}>
      <View style={layoutStyles.container}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          AboutScreen
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;
