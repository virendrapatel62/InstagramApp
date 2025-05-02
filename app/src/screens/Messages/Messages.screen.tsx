import { Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';

export default function Messages() {
  return (
    <ScreenWrapper>
      <Flex fill center>
        <Text size="title">Messages Screen</Text>
      </Flex>
    </ScreenWrapper>
  );
}
