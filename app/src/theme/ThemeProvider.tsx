import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { darkTheme, lightTheme } from './colors';
import { IThemeContextValue, TThemeProvider } from './theme.types';

export const ThemeContext = createContext<IThemeContextValue>({
  theme: lightTheme,
  isDark: false,
});

const ThemeProvider: TThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  const toggleTheme = () => setIsDark(prev => !prev);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDark(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  const value = useMemo(() => {
    return {
      theme: isDark ? darkTheme : lightTheme,
      isDark,
      toggleTheme,
    };
  }, [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'} // Icon/text color
      />

      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
