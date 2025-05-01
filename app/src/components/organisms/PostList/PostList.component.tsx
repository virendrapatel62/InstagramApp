import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { getRandomImage } from '../../../lib/seed';
import { useTheme } from '../../../theme';
import Flex from '../../atoms/Flex/Flex.component';
import Post from '../../molecules/Post/Post.component';
import createStyles from './PostList.styles';

export default function PostList() {
  const { theme } = useTheme();

  const posts = useRef(
    Array(20)
      .fill(0)
      .map(() => getRandomImage(500, 600)),
  ).current;

  const styles = createStyles(theme);

  return (
    <Flex>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.posts}>
        {posts.map((post, index) => (
          <Post thumbnail={post} key={index} />
        ))}
      </ScrollView>
    </Flex>
  );
}
