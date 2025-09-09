import { Pressable, Text, TextStyle } from "react-native";

import * as Haptics from 'expo-haptics';

import { elementStyles } from "@/styles/styles";


interface Props {
  type?: 'button_primary' | 'button_secondary' | 'button_secondaryBg';
  content: string;
  contentStyles?: TextStyle | TextStyle[];
  onPress: () => void;
  onLongPress?: () => void;
}

const AppButton = ({
  content,
  contentStyles,
  onPress,
  onLongPress,
  type,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        elementStyles.button,
        type && elementStyles[type],
        pressed && elementStyles.button_active,
      ]}
      onPress={() => {
        Haptics.selectionAsync()
        onPress()
      }}
      onLongPress={onLongPress}
    >
      <Text style={contentStyles}>{content}</Text>
    </Pressable>
  );
}

export default AppButton;
