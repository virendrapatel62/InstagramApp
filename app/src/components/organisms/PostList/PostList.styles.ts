import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../theme/theme.types';

const createStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    posts: {
      marginTop: 16,
      display: 'flex',
      gap: 16,
    },
  });
};

export default createStyles;
