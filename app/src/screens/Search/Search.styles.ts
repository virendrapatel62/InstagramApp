import { StyleSheet } from 'react-native';
import { ThemeType } from '../../theme/theme.types';

export default function createStyles(theme: ThemeType, isDark: boolean) {
  return StyleSheet.create({
    inputContainer: {
      position: 'relative',
      justifyContent: 'center',
      margin: 16,
      marginEnd: 0,
    },
    metaAiLogo: {
      position: 'absolute',
      left: 12,
      top: 'auto',
      bottom: 'auto',
      zIndex: 1,
    },
    input: {
      height: 40,
      borderColor: isDark ? '#666' : '#ccc',
      borderWidth: 1,
      borderRadius: 50,
      paddingHorizontal: 16,
      paddingLeft: 42,
      backgroundColor: isDark ? '#2c2c2e' : '#fff',
      fontSize: 16,
      color: theme.colors.textSecondary,
    },
  });
}
