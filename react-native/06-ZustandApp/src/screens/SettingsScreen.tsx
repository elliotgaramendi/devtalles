/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import {useCounterStore} from '../store/counter.store';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
  utilStyles,
} from '../styles/styles';

const SettingsScreen = () => {
  const {count, incrementBy} = useCounterStore();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Settings (${count})`,
    });
  }, [count, navigation]);

  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap2]}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          {count}
        </Text>
        <CustomButton
          content="+"
          onPress={() => incrementBy(+1)}
          type="buttonIsPrimary"
        />
        <CustomButton
          content="-"
          onPress={() => incrementBy(-1)}
          type="buttonIsPrimary"
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
