/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderApp from './src/components/HeaderApp';
import {globalStyles} from './src/styles/styles';
import CounterScreen from './src/screens/CounterScreen';

const App = () => {
  return (
    <PaperProvider settings={{icon: props => <Ionicons {...props} />}}>
      <SafeAreaView style={globalStyles.body}>
        <HeaderApp name="CounterApp" />
        <CounterScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
