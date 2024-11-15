/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {componentStyles, elementStyles, layoutStyles} from '../styles/styles';

interface Props {
  title?: string;
}

const HeaderApp = ({title = 'CSS App'}: Props) => {
  return (
    <View style={componentStyles.header}>
      <View style={layoutStyles.container}>
        <Text style={elementStyles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default HeaderApp;
