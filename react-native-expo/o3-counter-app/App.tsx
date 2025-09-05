import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.hero}>
      <View style={styles.container}>
        <Text style={styles.title}>{count}</Text>
        <Pressable
          style={styles.button}
          onPress={() => setCount(count + 1)}
          onLongPress={() => setCount(0)}
        >
          <Text style={[styles.interactive, styles.interactiveIs2XL]}>+1</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: {
    flex: 1,
    backgroundColor: '#010508',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fefefe',
    fontSize: 60,
    fontWeight: '900',
  },
  interactive: {
    color: '#010508',
    fontSize: 14,
    fontWeight: '600',
  },
  interactiveIs2XL: {
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    paddingBlock: 8,
    paddingInline: 16,
    borderRadius: 8,
    backgroundColor: '#23b5e8',
  },
});