import { useEffect } from 'react';
import { Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import InstgramImageLogo from '../../components/atoms/Logo/ImageLogo.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { navigateToHomeScreen, useNavigation } from '../../navigation';
import { useTheme } from '../../theme';

export default function SplashScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigateToHomeScreen(navigation);
    }, 3000);
  }, []);

  return (
    <ScreenWrapper>
      <Flex fill>
        <Flex grow={9} center>
          <InstgramImageLogo width={70} height={70} />
        </Flex>
        <Flex grow={1} center>
          <Text color={theme.textSecondary}>from</Text>
          <Text size="xl" color={theme.textSecondary}>
            Jhetha
          </Text>
        </Flex>
      </Flex>
    </ScreenWrapper>
  );
}
