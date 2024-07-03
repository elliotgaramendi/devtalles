/* eslint-disable react/react-in-jsx-scope */
import {Image, StyleSheet, View} from 'react-native';
import {
  componentStyles,
  elementStyles,
  layoutStyles,
  primaryColor,
  secondaryColor,
  size,
  whiteColor,
} from '../styles/styles';

interface Props {
  image?: string;
}

const Banner = ({image}: Props) => {
  return (
    <View style={componentStyles.banner}>
      <Image
        source={{
          uri: image,
        }}
        style={elementStyles.imgIsBackground}
      />
      <View
        style={[
          layoutStyles.container,
          layoutStyles.flexbox,
          layoutStyles.flexboxIsCenter,
        ]}>
        <View style={[styles.box, styles.boxIs1]} />
        <View style={[styles.box, styles.boxIs2]} />
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  box: {
    width: size * 16,
    height: size * 16,
    borderWidth: size,
    borderColor: whiteColor,
  },
  boxIs1: {
    position: 'relative',
    top: -size,
    right: size,
    backgroundColor: primaryColor,
  },
  boxIs2: {
    position: 'relative',
    bottom: -size,
    left: size,
    backgroundColor: secondaryColor,
  },
});
