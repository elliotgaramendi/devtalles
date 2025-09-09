import { elementStyles } from "@/styles/styles";
import { Pressable, Text, TextStyle } from "react-native";

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
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={contentStyles}>{content}</Text>
    </Pressable>
  );
}

export default AppButton;
