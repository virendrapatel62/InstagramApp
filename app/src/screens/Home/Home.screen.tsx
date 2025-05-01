import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { Text } from '../../components/atoms';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <HomeHeader />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text size="xxl" weight="bold">
          Home Screen
        </Text>
      </View>
    </ScreenWrapper>
  );
}
