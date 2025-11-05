
import { Pressable, PressableProps } from 'react-native';
import ThemedText from './ThemedText';

interface Props extends PressableProps {
  className?: string;
  children: string;
}

const ThemedButton = ({ className, children, ...rest }: Props) => {
  return (
    <Pressable
      className={`bg-light-primary dark:bg-dark-primary items-center rounded-xl px-6 py-2 active:opacity-80 ${className}`}
      {...rest}
    >
      <ThemedText className="text-white text-2xl">{children}</ThemedText>
    </Pressable>
  );
};
export default ThemedButton;
