import { useEffect } from "react";
import ScreenWrapper from "../../components/layouts/ScreenWrapper/ScreenWrapper.layout";
import HomeHeader from "../../components/organisms/HomeHeader/HomeHeader.component";
import PostList from "../../components/organisms/PostList/PostList.component";
import StoryList from "../../components/organisms/StoryList/StoryList.component";
import { usePostStore } from "./usePostStore";

export default function HomeScreen() {
  const { fetchPosts, hasMore, loading, page, posts } = usePostStore();

  useEffect(() => {
    fetchPosts({
      reset: true,
    });
  }, []);

  return (
    <ScreenWrapper>
      <HomeHeader />
      <StoryList />
      <PostList
        posts={posts}
        onRefresh={() => fetchPosts({ reset: true })}
        refreshing={loading}
      />
    </ScreenWrapper>
  );
}
