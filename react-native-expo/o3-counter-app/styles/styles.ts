import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hero: {
    flex: 1,
    backgroundColor: '#010508',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fefefe',
    fontSize: 60,
    fontWeight: '900',
  },
  interactive: {
    color: '#010508',
    fontSize: 14,
    fontWeight: '600',
  },
  interactiveIs2XL: {
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    paddingBlock: 8,
    paddingInline: 16,
    borderRadius: 8,
    backgroundColor: '#010508',
  },
  buttonIsActive: {
    opacity: 0.875,
    shadowColor: "#23b5e8",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5,
  },
  buttonIsPrimary: {
    backgroundColor: '#23b5e8',
  },
  fDirectionRow: { flexDirection: 'row' },
  gap1: { gap: 4 },
});