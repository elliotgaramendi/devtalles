/* eslint-disable react/react-in-jsx-scope */
import { useNavigation } from '@react-navigation/native';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { elementStyles, layoutStyles, utilStyles } from '../../../styles/styles';

interface Props {
  originalTitle?: string;
  title?: string;
  poster?: string;
}


const MovieHeader = ({ originalTitle, title, poster }: Props) => {
  const { height: screenHeight } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={utilStyles.gap4}>
      <Text
        onPress={() => navigation.goBack()}
        style={[elementStyles.title, utilStyles.pAbsolute, utilStyles.top2, utilStyles.left2, utilStyles.zIndex1]}
      >
        ⬅️
      </Text>
      <Image
        source={{ uri: poster }}
        style={[elementStyles.image, elementStyles.imageIsBannerPoster, { height: screenHeight * 0.75 }]}
      />
      <View style={layoutStyles.container}>
        <Text style={[elementStyles.text, utilStyles.cSecondary]}>{title}</Text>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>{originalTitle}</Text>
      </View>
    </View>
  );
};

export default MovieHeader;
