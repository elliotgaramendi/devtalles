/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {PaperProvider, Text} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = () => {
  return (
    <PaperProvider settings={{icon: props => <Ionicons {...props} />}}>
      <Text>CounterApp</Text>
    </PaperProvider>
  );
};

export default App;
