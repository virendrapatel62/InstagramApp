import React, { useState, useCallback } from 'react';
import { Spacer } from 'react-native-flex-layout';
import { getRandomImage } from '../../../lib/seed';
import { useTheme } from '../../../theme';
import Flex from '../../atoms/Flex/Flex.component';
import ListView from '../../layouts/ListView/ListView.component';
import Post from '../../molecules/Post/Post.component';
import createStyles from './PostList.styles';
import { Text } from '../../atoms';

export default function PostList() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const generatePosts = (count: number) =>
    Array(count)
      .fill(0)
      .map(() => getRandomImage(500, 600));

  const [posts, setPosts] = useState(generatePosts(10));

  const handleLoadMore = useCallback(() => {
    console.log('Loading now...');

    // setTimeout(() => {
    //   console.log('Loading now...');
    //   setPosts(prevPosts => [...prevPosts, ...generatePosts(10)]);
    // }, 500);
  }, []);

  return (
    <Flex mt={20}>
      <ListView
        estimatedItemSize={88}
        data={posts}
        showsVerticalScrollIndicator={true}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <Spacer h={10} />}
        renderItem={({ item, index }) => (
          <Flex key={index}>
            <Post thumbnail={item} key={index} />
          </Flex>
        )}
        // onEndReached={handleLoadMore}
        // onEndReachedThreshold={0}
      />
    </Flex>
  );
}
