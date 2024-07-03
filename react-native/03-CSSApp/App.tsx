/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';
import HeaderApp from './src/HeaderApp';
import {globalStyles} from './styles/styles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles.body}>
      <HeaderApp />
    </SafeAreaView>
  );
}

export default App;
