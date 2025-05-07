import React, { useCallback, useState } from 'react';
import { Spacer } from 'react-native-flex-layout';
import { getRandomImage } from '../../../lib/seed';
import { useTheme } from '../../../theme';
import Flex from '../../atoms/Flex/Flex.component';
import ListView from '../../layouts/ListView/ListView.component';
import Post from '../../molecules/Post/Post.component';
import createStyles from './PostList.styles';

export default function PostList() {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  const generatePosts = (count: number) =>
    Array(count)
      .fill(0)
      .map(() => getRandomImage(500, 600));

  const [posts, setPosts] = useState(generatePosts(10));

  const handleLoadMore = useCallback(() => {
    console.log('Loading more posts...');
    setPosts(prev => [...prev, ...generatePosts(10)]);
  }, []);

  return (
    <Flex style={{ flex: 1 }} mt={20}>
      <ListView
        estimatedItemSize={88}
        data={posts}
        showsVerticalScrollIndicator={true}
        keyExtractor={(_, index) => index.toString()}
        ItemSeparatorComponent={() => <Spacer h={10} />}
        renderItem={({ item, index }) => (
          <Flex key={index}>
            <Post thumbnail={item} />
          </Flex>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1} // Reduced threshold
        ListFooterComponent={<Spacer h={30} />} // Padding at bottom
      />
    </Flex>
  );
}
