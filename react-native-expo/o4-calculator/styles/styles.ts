import { StyleSheet } from "react-native";

// Variables
const primaryColor = '#23b5e8';
const secondaryColor = '#234b96';
const blackColor = '#010508';
const whiteColor = '#fefefe';
const neutral200 = '#bbb';
const neutral950 = '#1b1b1b';
const size = 3.5

// Tokens
export const styleVariables = {
  primaryColor,
  secondaryColor,
  blackColor,
  whiteColor,
  primaryBackground: blackColor,
  secondaryBackground: neutral950,
  primaryText: whiteColor,
  secondaryText: neutral200,
  lightPrimaryText: blackColor,
  size
};

// Globals
export const globalStyles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: styleVariables.primaryBackground
  }
});

// Layout
export const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingInline: styleVariables.size * 4
  }
});

// Components
export const componentStyles = StyleSheet.create({
  hero: {
    flex: 1,
    paddingBlock: styleVariables.size * 8
  }
});

// Elements
export const elementStyles = StyleSheet.create({
  title: {
    color: styleVariables.primaryText,
    fontFamily: 'SpaceMono',
    fontSize: styleVariables.size * 8,
    fontWeight: '800'
  },
  title_2xs: {
    fontSize: styleVariables.size * 5,
    fontWeight: '700'
  },
  title_3xl: {
    fontSize: styleVariables.size * 12,
    fontWeight: '900'
  },
  button: {
    // paddingBlock: 8,
    // paddingInline: 16,
    // borderRadius: 8,
    backgroundColor: styleVariables.primaryBackground,

    alignItems: 'center',
    justifyContent: 'center',
    width: styleVariables.size * 16,
    height: styleVariables.size * 16,
    borderRadius: styleVariables.size * 16 / 2,
  },
  button_active: {
    opacity: 0.875,
    shadowColor: styleVariables.whiteColor,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5
  },
  button_primary: {
    backgroundColor: styleVariables.primaryColor
  },
  button_secondary: {
    backgroundColor: styleVariables.secondaryColor
  },
  button_secondaryBg: {
    backgroundColor: styleVariables.secondaryBackground
  },
});

// Utils
export const utilsStyles = StyleSheet.create({
  fDirectionRow: { flexDirection: 'row' },
  fWrap: { flexWrap: 'wrap' },
  aItemsCenter: { alignItems: 'center' },
  aItemsEnd: { alignItems: 'flex-end' },
  jContentCenter: { justifyContent: 'center' },
  jContentEnd: { justifyContent: 'flex-end' },
  gap4: { gap: styleVariables.size * 4 },
  widthSm: { width: styleVariables.size * 76 },
  cPrimaryText: { color: styleVariables.primaryText },
  cSecondaryText: { color: styleVariables.secondaryText },
  cLightPrimaryText: { color: styleVariables.lightPrimaryText }
});