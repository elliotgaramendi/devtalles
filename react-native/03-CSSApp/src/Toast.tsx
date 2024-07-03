/* eslint-disable react/react-in-jsx-scope */
import {Text} from 'react-native';
import {elementStyles} from '../styles/styles';

interface Props {
  content?: string;
}

const Toast = ({content}: Props) => {
  return <Text style={elementStyles.toast}>{content}</Text>;
};

export default Toast;
