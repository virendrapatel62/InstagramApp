import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { darkTheme, lightTheme } from './colors';
import { IThemeContextValue, TThemeProvider } from './theme.types';
import { fontSizes, fontWeights } from '../components/atoms';

const defaultValues = {
  theme: {
    colors: lightTheme,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
  },
  isDark: false,
};
export const ThemeContext = createContext<IThemeContextValue>({
  ...defaultValues,
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
      ...defaultValues,
      isDark,
      toggleTheme,
      theme: {
        ...defaultValues.theme,
        colors: isDark ? darkTheme : lightTheme,
      },
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
