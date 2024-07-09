import {StyleSheet} from 'react-native';

const primaryColor = '#23B5E8';
const blackColor = '#010508';
const whiteColor = '#f1f5f8';
const neutral900 = '#2A2C2D';
const neutral500 = '#77797A';
const neutral300 = '#9A9C9E';
export const primaryBackground = blackColor;
const primaryText = whiteColor;
const secondaryText = neutral500;
const size = 3.5;

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: primaryBackground,
  },
  mainResult: {
    color: primaryText,
    fontSize: size * 20,
    textAlign: 'right',
    fontWeight: '500',
  },
  subResult: {
    color: secondaryText,
    fontSize: size * 10,
    textAlign: 'right',
    fontWeight: '300',
  },
  mTopAuto: {
    marginTop: 'auto',
  },
});

export const layoutStyles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: size * 4,
  },
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export const componentStyles = StyleSheet.create({
  section: {
    paddingVertical: size * 8,
  },
});

export const elementStyles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size * 22,
    height: size * 22,
    borderColor: primaryBackground,
    borderWidth: size * 0.5,
    borderRadius: size * 11,
    backgroundColor: primaryBackground,
  },
  buttonIsActive: {
    opacity: 0.75,
  },
  buttonIsPrimary: {
    borderColor: primaryColor,
    backgroundColor: primaryColor,
  },
  buttonIsNeutral300: {
    borderColor: neutral300,
    backgroundColor: neutral300,
  },
  buttonIsNeutral900: {
    borderColor: neutral900,
    backgroundColor: neutral900,
  },
  buttonIsDoubleWidth: {
    width: size * 22 * 2 + size * 4,
  },
  button__content: {
    color: primaryText,
    fontSize: size * 8,
    fontWeight: '600',
  },
});

export const utilStyles = StyleSheet.create({
  dFlex: {display: 'flex'},
  aItemsCenter: {alignItems: 'center'},
  gap4: {gap: size * 4},
  cBlack: {color: blackColor},
});
