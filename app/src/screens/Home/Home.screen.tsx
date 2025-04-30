import { View } from 'react-native';
import { Text } from '../../components/atoms';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text color="black" size="xxl" weight="bold">
        Home
      </Text>
    </View>
  );
}
