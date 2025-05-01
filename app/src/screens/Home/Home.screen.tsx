import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';

export default function HomeScreen() {
  return (
    <ScreenWrapper>
      <HomeHeader />
    </ScreenWrapper>
  );
}
