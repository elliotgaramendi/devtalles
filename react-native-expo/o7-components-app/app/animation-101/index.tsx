import { useRef } from 'react';
import { Animated } from 'react-native';

import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';

const Animation101Screen = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity
        }}
      />
      <ThemedButton className="my-5" onPress={() => fadeIn()}>FadeIn </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut()}>FadeOut </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
