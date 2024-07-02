import {StyleSheet} from 'react-native';

export const primaryColor = '#23B5E8';
export const secondaryColor = '#234B96';
export const whiteColor = '#f1f5f8';
export const blackColor = '#010508';
export const neutral950 = '#191B1C';
export const primaryBackground = blackColor;
export const secondaryBackground = neutral950;
export const primaryText = whiteColor;
export const lightPrimaryText = blackColor;
export const size = 3.5;
export const borderRadius = size * 2;

export const globalStyles = StyleSheet.create({
  body: {
    flex: 1,
    // minHeight: '100%',
    backgroundColor: primaryBackground,
  },
});

export const layoutStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: size * 4,
  },
  flexbox: {
    display: 'flex',
  },
  flexboxIsCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexboxIsAutoFit: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export const componentStyles = StyleSheet.create({
  header: {
    paddingVertical: size * 2,
    borderBottomWidth: size * 0.5,
    borderBottomColor: whiteColor,
  },
  section: {
    paddingVertical: size * 8,
  },
  banner: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: size * 64,
    paddingVertical: size * 8,
  },
});

export const elementStyles = StyleSheet.create({
  title: {
    color: primaryText,
    fontSize: size * 8,
    fontWeight: '800',
  },
  toast: {
    position: 'absolute',
    zIndex: 5,
    right: 0,
    padding: size * 4,
    margin: size * 4,
    borderLeftWidth: size * 0.5,
    borderLeftColor: primaryColor,
    borderBottomWidth: size * 0.5,
    borderBottomColor: secondaryColor,
    borderRadius: borderRadius,
    backgroundColor: secondaryBackground,
    color: primaryText,
  },
  imgIsAdvertisement: {
    width: '100%',
    height: size * 32,
  },
  imgIsBackground: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
  },
  badge: {
    padding: size,
    borderRadius: borderRadius,
    backgroundColor: primaryBackground,
    color: primaryText,
    fontSize: size * 3,
    fontWeight: 600,
  },
  badgeIsPrimary: {
    backgroundColor: primaryColor,
    color: lightPrimaryText,
  },
});

export const utilStyles = StyleSheet.create({
  gap2: {gap: size * 2},
  bgSecondary: {backgroundColor: secondaryBackground},
});
