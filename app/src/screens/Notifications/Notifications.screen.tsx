import { Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';

export default function Notifications() {
  return (
    <ScreenWrapper>
      <Flex fill center>
        <Text size="title">Notifications</Text>
      </Flex>
    </ScreenWrapper>
  );
}
