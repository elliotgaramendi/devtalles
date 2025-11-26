import { useThemeColor } from '@/presentation/theme/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuthStore } from '../store/useAuthStore';

const LogoutIconButton = () => {
  const primaryColor = useThemeColor({}, 'primary');
  const { logout } = useAuthStore();

  return (
    <Pressable style={{ marginRight: 8 }} onPress={logout}>
      <Ionicons name="log-out-outline" size={24} color={primaryColor} />
    </Pressable>
  );
};

export default LogoutIconButton;
