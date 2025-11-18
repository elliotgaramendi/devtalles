import { ThemedText } from '@/presentation/components/shared/themed-text';
import { ThemedView } from '@/presentation/components/shared/themed-view';
import ThemedPressable from '@/presentation/components/shared/ThemedPressable';
import { usePermissionsStore } from '@/presentation/store/usePermissions';

const PermissionsScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicación
      </ThemedPressable>

      <ThemedText>Estado actual: {locationStatus}</ThemedText>
    </ThemedView>
  );
};
export default PermissionsScreen;
