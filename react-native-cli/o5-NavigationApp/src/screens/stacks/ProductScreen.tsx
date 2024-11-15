/* eslint-disable react/react-in-jsx-scope */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParamList} from '../../routes/MyStack';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
} from '../../styles/styles';

const ProductScreen = () => {
  const {
    params: {id, name},
  } = useRoute<RouteProp<RootStackParamList, 'Product'>>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  return (
    <View style={componentStyles.section}>
      <View style={layoutStyles.container}>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
          {id}: {name}
        </Text>
      </View>
    </View>
  );
};

export default ProductScreen;
