/* eslint-disable react/react-in-jsx-scope */
import {StatusBar, View} from 'react-native';
import Calculator from './screens/Calculator';
import {primaryBackground, styles} from './styles/styles';

function App() {
  return (
    <View style={styles.body}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={primaryBackground}
      />
      <Calculator />
    </View>
  );
}

export default App;
