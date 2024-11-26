import { StyleSheet } from 'react-native';
import {
  blackColor,
  borderRadius,
  primaryText,
  size,
} from './variables';

export const elementStyles = StyleSheet.create({
  title: {
    color: primaryText,
    fontSize: size * 8,
    fontWeight: '800',
  },
  image: {
    borderRadius: borderRadius,
  },
  imageIsPoster: {
    width: '100%',
    height: '100%',
    shadowColor: blackColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
