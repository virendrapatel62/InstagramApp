import { ScrollView } from 'react-native';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader.component';
import PostList from '../../components/organisms/PostList/PostList.component';
import StoryList from '../../components/organisms/StoryList/StoryList.component';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <ScrollView>
        <HomeHeader />
        <StoryList />
        <PostList />
      </ScrollView>
    </ScreenWrapper>
  );
}
