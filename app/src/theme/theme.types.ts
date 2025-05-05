import { FunctionComponent, PropsWithChildren } from 'react';
import { lightTheme } from './colors';
import { StyleSheet } from 'react-native';
import { fontSizes, fontWeights } from '../components/atoms';

export type ThemeColorType = typeof lightTheme;
export type ThemeType = {
  colors: ThemeColorType;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
};

export interface IThemeContextValue {
  theme: ThemeType;
  isDark: boolean;
  toggleTheme?: () => void;
}

export type TThemeProvider = FunctionComponent<PropsWithChildren>;

export type TCreateStyles = (theme: ThemeType) => StyleSheet.NamedStyles<any>;
