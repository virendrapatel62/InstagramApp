import { FunctionComponent, PropsWithChildren } from 'react';
import { lightTheme } from './colors';
import { StyleSheet } from 'react-native';

export type ThemeType = typeof lightTheme;

export interface IThemeContextValue {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme?: () => void;
}

export type TThemeProvider = FunctionComponent<PropsWithChildren>;

export type TCreateStyles = (theme: ThemeType) => StyleSheet.NamedStyles<any>;
