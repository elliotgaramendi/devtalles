import { ReactNode } from 'react';
import { Pressable, Text } from 'react-native';

import * as Haptics from 'expo-haptics';

interface AppButtonProps {
  variant?: 'primary' | 'secondary' | 'outline-primary';
  onPress: () => void;
  onLongPress?: () => void;
  textClasses?: string;
  children?: ReactNode;
}

const VARIANT_STYLES = {
  primary: {
    pressable: 'bg-primary border-primary',
    text: 'text-app-black'
  },
  secondary: {
    pressable: 'bg-secondary border-secondary',
    text: 'text-app-white'
  },
  'outline-primary': {
    pressable: 'bg-transparent border-primary',
    text: 'text-app-white'
  },
  default: {
    pressable: 'bg-app-black border-app-black',
    text: 'text-app-white'
  }
};

const AppButton = ({
  variant,
  onPress,
  onLongPress,
  textClasses = '',
  children
}: AppButtonProps) => {
  const baseStyles = 'py-2 px-4 rounded-lg border-2 active:shadow-sm active:opacity-85';

  const styles = (variant && VARIANT_STYLES[variant]) || VARIANT_STYLES.default;

  return (
    <Pressable
      className={`${baseStyles} ${styles.pressable}`}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
      onLongPress={onLongPress}
    >
      <Text className={`${styles.text} ${textClasses}`}>
        {children}
      </Text>
    </Pressable>
  );
};

export default AppButton;