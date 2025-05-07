import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../theme/theme.types';

const createStyle = (theme: ThemeType) => {
  return StyleSheet.create({
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {},
    heartOverlay: {
      position: 'absolute',
    },
  });
};

export default createStyle;
