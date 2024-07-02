import {StyleSheet} from 'react-native';

export const primaryColor = '#23B5E8';
export const blackColor = '#010508';
export const primaryBackground = blackColor;
export const lightPrimaryText = blackColor;
export const size = 3.5;

export const globalStyles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: primaryBackground,
  },
});

export const layoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: size * 4,
  },
});

export const componentStyles = StyleSheet.create({
  header: {
    paddingVertical: size * 2,
  },
  section: {
    paddingVertical: size * 8,
  },
});

export const elementStyles = StyleSheet.create({
  title: {
    color: primaryColor,
    fontSize: size * 8,
    fontWeight: '800',
  },
});

export const utilStyles = StyleSheet.create({
  dFlex: {display: 'flex'},
  aItemsCenter: {alignItems: 'center'},
});
