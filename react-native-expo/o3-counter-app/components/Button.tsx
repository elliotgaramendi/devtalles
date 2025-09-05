import { Pressable, Text, TextStyle } from "react-native";
import { styles } from "../styles/styles";

interface Props {
  type?: 'buttonIsPrimary';
  content: string;
  contentStyles?: TextStyle | TextStyle[];
  onPress: () => void;
  onLongPress?: () => void;
}

const Button = ({
  content,
  contentStyles,
  onPress,
  onLongPress,
  type,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        type && styles[type],
        pressed && styles.buttonIsActive,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={contentStyles}>{content}</Text>
    </Pressable>
  );
}

export default Button;
