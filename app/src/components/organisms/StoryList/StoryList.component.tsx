import React, { useRef } from 'react';
import { View } from 'react-native';
import { getRandomImage } from '../../../lib/seed';
import { useTheme } from '../../../theme';
import ListView from '../../layouts/ListView/ListView.component';
import StoryItem from '../../molecules/StoryItem/StoryItem.component';
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
    <ListView
      data={stories}
      horizontal
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
      renderItem={({ item, index }) => (
        <StoryItem
          style={getStoryItemStyles(index)}
          thumbnail={item}
          key={index}
        />
      )}
    />
  );
}
