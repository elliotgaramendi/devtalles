import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

const ModalScreen = () => {
  return (
    <ThemedView
      className="flex-1 justify-center items-center"
      bgColor="#23be58"
    >
      <ThemedText>Hola, Soy un modal</ThemedText>

      <ThemedButton
        className="my-4"
        onPress={() => router.push('/modal/modal-window-2')}
      >
        Otro modal
      </ThemedButton>

      <ThemedButton
        onPress={() => router.dismiss()}
      >
        Cerrar
      </ThemedButton>

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  );
};
export default ModalScreen;
