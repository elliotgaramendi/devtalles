import { ThemedText } from '@/components/themed-text';
import { usePushNotifications } from '@/hooks/usePushNotifications';
import { FlatList, View } from 'react-native';

const PushApp = () => {
  const { notifications } = usePushNotifications();
  console.log(notifications);

  return (
    <View style={{ marginHorizontal: 10, marginTop: 5 }}>
      <ThemedText
        style={{
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 25,
        }}
      >
        Notificaciones
      </ThemedText>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.request.identifier}
        renderItem={({ item }) => (
          <View>
            <ThemedText style={{ fontWeight: 'bold' }}>
              {item.request.content.title}
            </ThemedText>
            <ThemedText>{item.request.content.body}</ThemedText>
            <ThemedText>
              {JSON.stringify(item.request.content.data, null, 2)}
            </ThemedText>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: 'grey', opacity: 0.3 }} />
        )}
      />
    </View>
  );
};

export default PushApp;
