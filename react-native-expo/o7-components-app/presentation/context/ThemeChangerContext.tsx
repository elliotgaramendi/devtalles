import { Colors } from '@/constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ThemeChangerContextType {
  currentTheme: 'light' | 'dark';
  isSystemTheme: boolean;

  bgColor: string;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

// Custom Hook para acceder al ThemeChangerContext
export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);

  return themeChanger;
};

// Provider
export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled ? colorScheme : isDarkMode ? 'dark' : 'light';

  const backgroundColor = isDarkMode
    ? Colors.dark.background
    : Colors.light.background;

  useEffect(() => {
    AsyncStorage.getItem('selected-theme').then((theme) => {
      if (!theme) return;

      setIsDarkMode(theme === 'dark');
      setIsSystemThemeEnabled(theme === 'system');
      setColorScheme(theme as 'light' | 'dark' | 'system');
    });
  }, [setColorScheme]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? 'light',
          isSystemTheme: isSystemThemeEnabled,
          bgColor: backgroundColor,

          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(isDarkMode ? 'light' : 'dark');
            setIsSystemThemeEnabled(false);
            await AsyncStorage.setItem('selected-theme', isDarkMode ? 'light' : 'dark');
          },

          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme('system');
            await AsyncStorage.setItem('selected-theme', 'system');
          }
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
