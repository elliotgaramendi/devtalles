
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface Props extends PressableProps {
  children: string;
}

const ThemedPressable = ({ children, ...rest }: Props) => {
  return (
    <Pressable style={styles.btnPrimary} {...rest}>
      <Text style={{ color: 'black' }}>{children}</Text>
    </Pressable>
  );
};

export default ThemedPressable;

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: '#23b5e8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    margin: 10,
  },
});
