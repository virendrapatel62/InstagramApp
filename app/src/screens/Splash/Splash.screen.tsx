import { useEffect } from 'react';
import { Image, Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { instagramImageLogo } from '../../lib/images';
import { navigateToHomeScreen, useNavigation } from '../../navigation';
import { useTheme } from '../../theme';
import PlaceholderScreen from '../Placeholder/Placeholder.screen';

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
          <Image
            src={instagramImageLogo}
            width={70}
            height={70}
            aspectRatio={1}></Image>
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
