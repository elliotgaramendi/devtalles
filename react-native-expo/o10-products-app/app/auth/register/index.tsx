import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
  View,
} from 'react-native';

import { useAuthStore } from '@/presentation/auth/store/useAuthStore';
import { ThemedText } from '@/presentation/theme/components/themed-text';
import ThemedButton from '@/presentation/theme/components/ThemedButton';
import ThemedLink from '@/presentation/theme/components/ThemedLink';
import ThemedTextInput from '@/presentation/theme/components/ThemedTextInput';
import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { router } from 'expo-router';
import { useState } from 'react';

const RegisterScreen = () => {
  const { height } = useWindowDimensions();
  const backgroundColor = useThemeColor({}, 'background');

  const { register } = useAuthStore();

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    fullName: '',
  });

  const onRegister = async () => {
    setIsPosting(true);
    const { email, password, fullName } = form;

    console.log({ email, password, fullName });

    if (email.length === 0 || password.length === 0 || fullName.length === 0) {
      return;
    }

    const wasSuccessful = await register(email, password, fullName);
    setIsPosting(false);

    if (wasSuccessful) {
      router.replace('/');
      return;
    }

    Alert.alert('Error', 'Usuario o contraseña no son correctos');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          backgroundColor: backgroundColor,
        }}
      >
        <View
          style={{
            paddingTop: height * 0.35,
          }}
        >
          <ThemedText type="title">Crear cuenta</ThemedText>
          <ThemedText style={{ color: 'grey' }}>
            Por favor crea una cuenta para continuar
          </ThemedText>
        </View>

        <View style={{ marginTop: 20 }}>

          <ThemedTextInput
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            icon="mail-outline"
            value={form.email}
            onChangeText={value => setForm({ ...form, email: value })}
          />

          <ThemedTextInput
            placeholder="Contraseña"
            secureTextEntry
            autoCapitalize="none"
            icon="lock-closed-outline"
            value={form.password}
            onChangeText={value => setForm({ ...form, password: value })}
          />

          <ThemedTextInput
            placeholder="Nombre completo"
            autoCapitalize="words"
            icon="person-outline"
            value={form.fullName}
            onChangeText={value => setForm({ ...form, fullName: value })}
          />
        </View>

        <View style={{ marginTop: 10 }} />

        <ThemedButton
          icon="arrow-forward-outline"
          onPress={onRegister}
          disabled={isPosting}
        >
          Crear cuenta
        </ThemedButton>

        <View style={{ marginTop: 50 }} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ThemedText>¿Ya tienes cuenta?</ThemedText>
          <ThemedLink href="/auth/login" style={{ marginHorizontal: 5 }}>
            Ingresar
          </ThemedLink>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
