import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ThemedView margin>
      <ThemedCard className="mb-5">
        <ThemedTextInput
          placeholder="Nombre Completo"
          autoCapitalize={'words'}
          autoCorrect={false}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
      </ThemedCard>

      <ThemedCard className="my-2">
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemedCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
