import React, { useMemo, useReducer, useRef } from 'react';
import { ScrollView } from 'react-native';
import Flex from '../../atoms/Flex/Flex.component';
import StoryItem from '../../molecules/StoryItem/StoryItem.component';
import { getRandomImage } from '../../../lib/seed';
import { useTheme } from '../../../theme';
import createStyles from './StoryList.styles';

export default function StoryList() {
  const { theme } = useTheme();

  const stories = useRef(
    Array(20)
      .fill(0)
      .map(() => getRandomImage(200)),
  ).current;

  const styles = createStyles(theme);

  const getStoryItemStyles = (index: number) => {
    if (index == 0) return [styles.storyItem, styles.firstStoryItem];
    if (index == stories.length - 1)
      return [styles.storyItem, styles.lastStoryItem];
    return styles.storyItem;
  };

  return (
    <Flex>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stories}>
        {stories.map((story, index) => (
          <StoryItem
            style={getStoryItemStyles(index)}
            thumbnail={story}
            key={story}
          />
        ))}
      </ScrollView>
    </Flex>
  );
}
