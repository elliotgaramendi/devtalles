/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './routes/MyDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
