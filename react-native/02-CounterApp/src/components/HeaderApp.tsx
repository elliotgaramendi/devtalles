/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {componentStyles, elementStyles, layoutStyles} from '../styles/styles';

interface Props {
  name?: string;
}

const HeaderApp = ({name = 'CounterApp'}: Props) => {
  return (
    <View style={componentStyles.header}>
      <View style={layoutStyles.container}>
        <Text style={elementStyles.title} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default HeaderApp;
