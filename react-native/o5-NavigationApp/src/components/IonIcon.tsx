/* eslint-disable react/react-in-jsx-scope */
import Icon from 'react-native-vector-icons/Ionicons';
import {primaryText} from '../styles/styles';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

const IonIcon = ({name, size = 16, color = primaryText}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};

export default IonIcon;
