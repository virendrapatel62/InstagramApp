import { StyleSheet } from 'react-native';
import { TCreateStyles, ThemeType } from '../../../theme/theme.types';

export const createStyles = (theme: ThemeType) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    input: {
      borderWidth: 1,
      borderColor: theme.colors.border || '#ddd',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 10,
      fontSize: 16,
      color: theme.colors.textPrimary,
      backgroundColor: theme.colors.background || '#fff',
    },
    noBorder: {
      borderWidth: 0,
    },
    multiline: {
      minHeight: 100,
      textAlignVertical: 'top',
    },
  });
