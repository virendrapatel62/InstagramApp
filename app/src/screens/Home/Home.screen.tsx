import { View } from 'react-native';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import StoryList from '../../components/organisms/StoryList/StoryList.component';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <HomeHeader />

      <StoryList />

      <Flex fill center>
        <Text size="xxl" weight="bold">
          Home Screen
        </Text>
      </Flex>
    </ScreenWrapper>
  );
}
