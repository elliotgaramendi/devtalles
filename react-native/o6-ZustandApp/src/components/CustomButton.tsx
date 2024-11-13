/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Text} from 'react-native';
import {elementStyles, primaryText} from '../styles/styles';

interface Props {
  content: string;
  contentColor?: string;
  onPress: () => void;
  onLongPress?: () => void;
  type?: 'buttonIsPrimary';
}

const CustomButton = ({
  content,
  contentColor = primaryText,
  onPress,
  onLongPress,
  type,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={({pressed}) => [
        elementStyles.button,
        type && elementStyles[type],
        pressed && elementStyles.buttonIsActive,
      ]}>
      <Text style={[elementStyles.button__content, {color: contentColor}]}>
        {content}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
