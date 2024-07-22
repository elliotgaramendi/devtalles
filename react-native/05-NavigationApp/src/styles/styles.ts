import {StyleSheet} from 'react-native';

export const primaryColor = '#23B5E8';
const whiteColor = '#f1f5f8';
export const blackColor = '#010508';
export const primaryBackground = blackColor;
export const primaryText = whiteColor;
export const size = 3.5;
export const borderRadius = size * 2;

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
  button: {
    paddingVertical: size * 2,
    paddingHorizontal: size * 4,
    borderColor: primaryBackground,
    borderWidth: size * 0.5,
    borderRadius: borderRadius,
    backgroundColor: primaryBackground,
  },
  buttonIsActive: {
    opacity: 0.75,
  },
  buttonIsPrimary: {
    borderColor: primaryColor,
    backgroundColor: primaryColor,
  },
  button__content: {
    color: primaryText,
    fontSize: size * 4,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export const utilStyles = StyleSheet.create({
  gap2: {gap: size * 2},
  h100: {height: '100%'},
  cBlack: {color: blackColor},
});
