import { StyleSheet } from 'react-native';
import { secondaryText, size } from './variables';

export const utilStyles = StyleSheet.create({
  pAbsolute: { position: 'absolute' },
  top2: { top: size * 2 },
  left2: { left: size * 2 },
  zIndex1: { zIndex: 1 },
  gap2: { gap: size * 2 },
  gap4: { gap: size * 4 },
  p2: { padding: size * 2 },
  py2: { paddingVertical: size * 2 },
  mx2: { marginHorizontal: size * 2 },
  cSecondary: { color: secondaryText },
});
