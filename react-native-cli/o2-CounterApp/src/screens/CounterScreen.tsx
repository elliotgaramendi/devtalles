/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
  lightPrimaryText,
  primaryColor,
  utilStyles,
} from '../styles/styles';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => setCounter(counter + 1);
  const handleLongClick = () => setCounter(0);

  return (
    <View style={componentStyles.section}>
      <View
        style={[
          layoutStyles.container,
          utilStyles.dFlex,
          utilStyles.aItemsCenter,
        ]}>
        <Text style={elementStyles.title} numberOfLines={1}>
          {counter}
        </Text>
        <FAB
          icon="add"
          onPress={handleClick}
          onLongPress={handleLongClick}
          color={lightPrimaryText}
          style={{backgroundColor: primaryColor}}
        />
      </View>
    </View>
  );
};

export default CounterScreen;
