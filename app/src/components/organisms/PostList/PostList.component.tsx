// PostList.tsx
import React from "react";
import { Spacer } from "react-native-flex-layout";
import { useTheme } from "../../../theme";
import Flex from "../../atoms/Flex/Flex.component";
import ListView from "../../layouts/ListView/ListView.component";
import Post from "../../molecules/Post/Post.component";
import createStyles from "./PostList.styles";

// Define the structure of a Post item
export type PostItem = {
  _id: string;
  caption: string;
  allowLikes: boolean;
  allowComments: boolean;
  media: {
    mediaUrl: string;
  }[];
};

type PostListProps = {
  posts: PostItem[];
  onEndReached?: () => void; // Optional load more handler
  onRefresh?: () => void; // Optional load more handler
  refreshing?: boolean;
};

export default function PostList(props: PostListProps) {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Flex style={{ flex: 1 }} mt={20}>
      <ListView
        estimatedItemSize={88}
        data={props.posts}
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
        showsVerticalScrollIndicator={true}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Spacer h={10} />}
        renderItem={({ item }) => (
          <Flex key={item._id}>
            <Post
              allowComments={item.allowComments}
              allowLikes={item.allowLikes}
              thumbnail={item.media[0]?.mediaUrl}
              caption={item.caption}
            />
          </Flex>
        )}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<Spacer h={30} />}
      />
    </Flex>
  );
}
