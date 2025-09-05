import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View } from 'react-native';
import Button from './components/Button';
import { styles } from './styles/styles';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.hero}>
      <View style={styles.container}>
        <Text style={styles.title}>{count}</Text>
        <View style={[styles.fDirectionRow, styles.gap1]}>
          <Button
            type='buttonIsPrimary'
            content="-1"
            contentStyles={[styles.interactive, styles.interactiveIs2XL]}
            onPress={() => setCount(count - 1)}
            onLongPress={() => setCount(0)}
          />
          <Button
            type='buttonIsPrimary'
            content="+1"
            contentStyles={[styles.interactive, styles.interactiveIs2XL]}
            onPress={() => setCount(count + 1)}
            onLongPress={() => setCount(0)}
          />
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}