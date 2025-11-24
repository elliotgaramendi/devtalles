import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

import CustomMap from '@/presentation/components/maps/CustomMap';
import { useLocationStore } from '@/presentation/store/useLocationStore';

const MapScreen = () => {
  const { lastKnownLocation, getLocation } = useLocationStore();

  useEffect(() => {
    if (lastKnownLocation === null) {
      getLocation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (lastKnownLocation === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <CustomMap initialLocation={lastKnownLocation} />
    </View>
  );
};

export default MapScreen;
