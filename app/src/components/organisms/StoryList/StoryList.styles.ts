import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../theme/theme.types';

const createStyles = (theme: ThemeType) => {
  return StyleSheet.create({
    stories: {
      marginTop: 16,
      display: 'flex',
      gap: 16,
    },
    firstStoryItem: {
      marginLeft: 16,
    },
    lastStoryItem: {
      marginRight: 16,
    },
    storyItem: {},
  });
};

export default createStyles;
