import { ScrollView, View } from 'react-native';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import StoryList from '../../components/organisms/StoryList/StoryList.component';
import PostList from '../../components/organisms/PostList/PostList.component';

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
