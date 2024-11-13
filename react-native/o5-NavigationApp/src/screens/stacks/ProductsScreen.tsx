/* eslint-disable react/react-in-jsx-scope */
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import {type RootStackParamList} from '../../routes/MyStack';
import {
  blackColor,
  componentStyles,
  elementStyles,
  layoutStyles,
  utilStyles,
} from '../../styles/styles';

const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const productsData = [
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'},
    {id: 4, name: 'Product 4'},
    {id: 5, name: 'Product 5'},
    {id: 6, name: 'Product 6'},
  ];

  return (
    <View style={componentStyles.section}>
      <View style={[layoutStyles.container, utilStyles.gap2, utilStyles.h100]}>
        <Text style={elementStyles.title}>Products</Text>
        <FlatList
          data={productsData}
          contentContainerStyle={utilStyles.gap2}
          renderItem={({item}) => (
            <CustomButton
              content={item.name}
              contentColor={blackColor}
              type="buttonIsPrimary"
              onPress={() =>
                navigation.navigate('Product', {id: item.id, name: item.name})
              }
            />
          )}
        />
        <View style={utilStyles.gap2}>
          <Text style={[elementStyles.title, elementStyles.titleIsXS]}>
            Products
          </Text>
          <CustomButton
            content="Settings"
            contentColor={blackColor}
            type="buttonIsPrimary"
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
      </View>
    </View>
  );
};

export default ProductsScreen;
