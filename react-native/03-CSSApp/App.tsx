/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, ScrollView, useWindowDimensions} from 'react-native';
import Advertisement from './src/Advertisement';
import Banner from './src/Banner';
import HeaderApp from './src/HeaderApp';
import Homework from './src/Homework';
import Skills from './src/Skills';
import Toast from './src/Toast';
import {globalStyles} from './styles/styles';

function App(): React.JSX.Element {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={globalStyles.body}>
      <ScrollView>
        <Toast
          content={`Styles with React Native I w: ${width} h: ${height}`}
        />
        <HeaderApp />
        <Advertisement url="https://i.postimg.cc/x9MyhM3D/react-system.webp" />
        <Banner image="https://i.postimg.cc/DvDS8Jqd/react-circuits.webp" />
        <Skills />
        <Homework />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
