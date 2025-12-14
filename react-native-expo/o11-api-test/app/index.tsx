import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const fetchRickAndMorty = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character', {
    timeout: 40000
  });
  return data.results;
};

const fetchDragonBall = async () => {
  const { data } = await axios.get('https://dragonball-api.com/api/characters', {
    timeout: 40000
  });
  return data;
};

const fetchFakeStore = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products', {
    timeout: 40000
  });
  return data;
};

export default function Index() {
  const insets = useSafeAreaInsets();
  const [selectedApi, setSelectedApi] = useState<'rickmorty' | 'dragonball' | 'fakestore'>('rickmorty');

  const fetchFn = selectedApi === 'rickmorty'
    ? fetchRickAndMorty
    : selectedApi === 'dragonball'
      ? fetchDragonBall
      : fetchFakeStore;

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['api-test', selectedApi],
    queryFn: fetchFn,
    retry: 2,
  });

  const endpoint = selectedApi === 'rickmorty'
    ? 'https://rickandmortyapi.com/api/character'
    : selectedApi === 'dragonball'
      ? 'https://dragonball-api.com/api/characters'
      : 'https://fakestoreapi.com/products';

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0A0E1A" />
      <View style={[styles.header, { paddingTop: insets.top + 16 }]}>
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            <View style={styles.titleRow}>
              <View style={styles.iconContainer}>
                <Text style={styles.iconText}>🚀</Text>
              </View>
              <View>
                <Text style={styles.title}>API Tester</Text>
                <Text style={styles.subtitle}>Conectividad en tiempo real</Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonRow}>
            <Pressable
              style={[
                styles.button,
                selectedApi === 'rickmorty' && styles.buttonActive
              ]}
              onPress={() => setSelectedApi('rickmorty')}
            >
              <Text style={styles.buttonEmoji}>🧪</Text>
              <Text style={[
                styles.buttonText,
                selectedApi === 'rickmorty' && styles.buttonTextActive
              ]}>
                Rick & Morty
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.button,
                selectedApi === 'dragonball' && styles.buttonActive
              ]}
              onPress={() => setSelectedApi('dragonball')}
            >
              <Text style={styles.buttonEmoji}>🐉</Text>
              <Text style={[
                styles.buttonText,
                selectedApi === 'dragonball' && styles.buttonTextActive
              ]}>
                Dragon Ball
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.button,
                selectedApi === 'fakestore' && styles.buttonActive
              ]}
              onPress={() => setSelectedApi('fakestore')}
            >
              <Text style={styles.buttonEmoji}>🛍️</Text>
              <Text style={[
                styles.buttonText,
                selectedApi === 'fakestore' && styles.buttonTextActive
              ]}>
                Fake Store
              </Text>
            </Pressable>
          </View>

          <View style={styles.endpointContainer}>
            <View style={styles.endpointIcon}>
              <Text style={styles.endpointIconText}>🔗</Text>
            </View>
            <View style={styles.endpointTextContainer}>
              <Text style={styles.endpointLabel}>ENDPOINT ACTIVO</Text>
              <Text style={styles.endpointText} numberOfLines={2}>{endpoint}</Text>
            </View>
          </View>
        </View>
      </View>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <View style={styles.loadingCard}>
            <ActivityIndicator size="large" color="#23B5E8" />
            <Text style={styles.loadingText}>Cargando datos...</Text>
            <Text style={styles.loadingSubtext}>Conectando con el servidor</Text>
          </View>
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <View style={styles.errorCard}>
            <View style={styles.errorIconContainer}>
              <Text style={styles.errorEmoji}>⚠️</Text>
            </View>
            <Text style={styles.errorTitle}>Error de Conexión</Text>
            <Text style={styles.errorMessage}>
              {(error as Error)?.message || 'No se pudo conectar con el servidor'}
            </Text>
            <Pressable style={styles.retryButton} onPress={() => refetch()}>
              <Text style={styles.retryButtonText}>🔄  Reintentar Conexión</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: insets.bottom + 16 }
          ]}
        >
          <View style={styles.content}>
            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>{Array.isArray(data) ? data.length : '1'}</Text>
                <Text style={styles.statLabel}>Registros</Text>
              </View>
              <View style={styles.statCard}>
                <View style={styles.statusBadge}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusText}>Online</Text>
                </View>
                <Text style={styles.statLabel}>Estado</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>200</Text>
                <Text style={styles.statLabel}>Status</Text>
              </View>
            </View>

            <View style={styles.responseCard}>
              <View style={styles.responseHeader}>
                <View style={styles.responseTitleContainer}>
                  <Text style={styles.responseIcon}>✨</Text>
                  <Text style={styles.responseTitle}>Respuesta del Servidor</Text>
                </View>
              </View>
              <View style={styles.codeContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Text style={styles.responseData}>
                    {JSON.stringify(data, null, 2)}
                  </Text>
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0E1A',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  loadingCard: {
    backgroundColor: '#131827',
    padding: 40,
    borderRadius: 24,
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#1E2536',
    shadowColor: '#23B5E8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  loadingText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  loadingSubtext: {
    fontSize: 14,
    color: '#8B92A8',
    fontWeight: '500',
  },
  header: {
    paddingBottom: 24,
    backgroundColor: '#131827',
    borderBottomWidth: 1,
    borderBottomColor: '#1E2536',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerContent: {
    paddingHorizontal: 20,
    gap: 20,
  },
  titleContainer: {
    gap: 4,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#23B5E815',
    borderWidth: 2,
    borderColor: '#23B5E8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#23B5E8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  iconText: {
    fontSize: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 14,
    color: '#8B92A8',
    fontWeight: '500',
    marginTop: 2,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 14,
    backgroundColor: '#1E2536',
    borderWidth: 2,
    borderColor: '#2A3447',
    alignItems: 'center',
    gap: 6,
  },
  buttonActive: {
    backgroundColor: '#23B5E815',
    borderColor: '#23B5E8',
    shadowColor: '#23B5E8',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 6,
  },
  buttonEmoji: {
    fontSize: 24,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 12,
    color: '#8B92A8',
  },
  buttonTextActive: {
    color: '#23B5E8',
  },
  endpointContainer: {
    backgroundColor: '#1E2536',
    padding: 16,
    borderRadius: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#23B5E8',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  endpointIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#23B5E815',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endpointIconText: {
    fontSize: 20,
  },
  endpointTextContainer: {
    flex: 1,
    gap: 4,
  },
  endpointLabel: {
    fontSize: 10,
    color: '#8B92A8',
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  endpointText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorCard: {
    backgroundColor: '#131827',
    padding: 32,
    borderRadius: 24,
    alignItems: 'center',
    gap: 16,
    borderWidth: 1,
    borderColor: '#FF475720',
    maxWidth: 400,
    width: '100%',
  },
  errorIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF475715',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  errorEmoji: {
    fontSize: 48,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4757',
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 15,
    color: '#8B92A8',
    textAlign: 'center',
    lineHeight: 22,
  },
  retryButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#23B5E8',
    borderRadius: 14,
    marginTop: 8,
    shadowColor: '#23B5E8',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#131827',
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1E2536',
    alignItems: 'center',
    gap: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#23B5E8',
  },
  statLabel: {
    fontSize: 11,
    color: '#8B92A8',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#00FF8815',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00FF88',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00FF88',
  },
  statusText: {
    fontSize: 13,
    color: '#00FF88',
    fontWeight: '700',
  },
  responseCard: {
    backgroundColor: '#131827',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1E2536',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  responseHeader: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1E2536',
  },
  responseTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  responseIcon: {
    fontSize: 24,
  },
  responseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  codeContainer: {
    backgroundColor: '#0A0E1A',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1E2536',
  },
  responseData: {
    fontSize: 12,
    color: '#23B5E8',
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});
