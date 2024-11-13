/* eslint-disable react/react-in-jsx-scope */
import {Pressable, Text} from 'react-native';
import {elementStyles, utilStyles} from '../styles/styles';

interface Props {
  content: string;
  contentBlack?: boolean;
  handlePress: () => void;
  handleLongPress?: () => void;
  type?: 'buttonIsPrimary' | 'buttonIsNeutral300' | 'buttonIsNeutral900';
  doubleWidth?: boolean;
}

const CustomButton = ({
  content,
  contentBlack,
  handlePress,
  handleLongPress,
  type,
  doubleWidth,
}: Props) => {
  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      style={({pressed}) => [
        elementStyles.button,
        type && elementStyles[type],
        pressed && elementStyles.buttonIsActive,
        doubleWidth && elementStyles.buttonIsDoubleWidth,
      ]}>
      <Text
        style={[
          elementStyles.button__content,
          contentBlack && utilStyles.cBlack,
        ]}>
        {content}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
