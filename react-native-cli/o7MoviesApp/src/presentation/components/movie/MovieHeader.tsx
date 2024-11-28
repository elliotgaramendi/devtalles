/* eslint-disable react/react-in-jsx-scope */
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { elementStyles, layoutStyles, utilStyles } from '../../../styles/styles';

interface Props {
  originalTitle?: string;
  title?: string;
  poster?: string;
  rating?: number;
  genres?: string[];
}

const MovieHeader = ({ originalTitle, title, poster, rating, genres }: Props) => {
  const { height: screenHeight } = useWindowDimensions();

  return (
    <View style={utilStyles.gap4}>
      <Image
        source={{ uri: poster }}
        style={[elementStyles.image, elementStyles.imageIsBannerPoster, { height: screenHeight * 0.75 }]}
      />
      <View style={layoutStyles.container}>
        <Text style={[elementStyles.text, utilStyles.cSecondary]}>{title}</Text>
        <Text style={[elementStyles.title, elementStyles.titleIsXS]}>{originalTitle}</Text>
        <Text style={[elementStyles.text]}>{rating} - {genres?.join(', ')}</Text>
      </View>
    </View>
  );
};

export default MovieHeader;
