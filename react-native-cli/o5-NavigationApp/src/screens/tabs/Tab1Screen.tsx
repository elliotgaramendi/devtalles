/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import Menu from '../../components/Menu';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
} from '../../styles/styles';

const Tab1Screen = () => {
  return (
    <>
      <Menu />
      <View style={componentStyles.section}>
        <View style={layoutStyles.container}>
          <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
            Tab1
          </Text>
        </View>
      </View>
    </>
  );
};

export default Tab1Screen;
