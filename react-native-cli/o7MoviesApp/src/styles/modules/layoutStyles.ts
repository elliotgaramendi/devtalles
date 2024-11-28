import { StyleSheet } from 'react-native';
import { size } from './variables';

export const layoutStyles = StyleSheet.create({
  container: {
    paddingHorizontal: size * 4,
  },
  flexbox: {
    flexDirection: 'row',
  },
  flexboxIsCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
