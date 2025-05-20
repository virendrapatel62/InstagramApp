import { useEffect } from "react";
import ScreenWrapper from "../../components/layouts/ScreenWrapper/ScreenWrapper.layout";
import HomeHeader from "../../components/organisms/HomeHeader/HomeHeader.component";
import PostList from "../../components/organisms/PostList/PostList.component";
import StoryList from "../../components/organisms/StoryList/StoryList.component";
import { usePostStore } from "./usePostStore";
import SecureStorage, { ACCESSIBLE } from "rn-secure-storage"; // ✅ use this

export default function HomeScreen() {
  const { fetchPosts, hasMore, loading, page, posts } = usePostStore();

  useEffect(() => {
    (async () => {
      try {
        await SecureStorage.setItem("Username", "Virnedra kuamr", {
          accessible: ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
        });

        await SecureStorage.getItem("Username");
        console.log("Done");
      } catch (error) {
        console.log(error);
      }
    })();
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
