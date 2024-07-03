/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, useWindowDimensions} from 'react-native';
import HeaderApp from './src/HeaderApp';
import Toast from './src/Toast';
import {globalStyles} from './styles/styles';

function App(): React.JSX.Element {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={globalStyles.body}>
      <Toast content={`Styles with React Native I w: ${width} h: ${height}`} />
      <HeaderApp />
    </SafeAreaView>
  );
}

export default App;
