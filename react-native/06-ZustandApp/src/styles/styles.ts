import {StyleSheet} from 'react-native';

export const primaryColor = '#23B5E8';
const blackColor = '#010508';
const whiteColor = '#f1f5f8';
export const primaryBackground = blackColor;
export const primaryText = whiteColor;
export const size = 3.5;

export const layoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: size * 4,
  },
});

export const componentStyles = StyleSheet.create({
  section: {
    paddingVertical: size * 8,
  },
});

export const elementStyles = StyleSheet.create({
  title: {
    color: primaryText,
    fontSize: size * 8,
    fontWeight: '800',
  },
  titleIsXS: {
    fontSize: size * 6,
    fontWeight: '700',
  },
});
