import { StyleSheet } from 'react-native';
import { TCreateStyles } from '../../../theme/theme.types';

export const createStyles: TCreateStyles = theme =>
  StyleSheet.create({
    text: {
      color: theme.colors.textPrimary,
    },
  });
