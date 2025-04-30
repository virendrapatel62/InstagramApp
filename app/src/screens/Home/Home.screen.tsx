import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeHeader from '../../components/organisms/HomeHeader/HomeHeader.component';

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View>
        <HomeHeader />
      </View>
    </SafeAreaView>
  );
}
