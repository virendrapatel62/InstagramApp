import { View } from 'react-native';
import { Text } from '../../components/atoms';

export default function PlaceholderScreen(props: { name: string }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text color="black" size="xxl" weight="bold">
        {props.name}
      </Text>
    </View>
  );
}
