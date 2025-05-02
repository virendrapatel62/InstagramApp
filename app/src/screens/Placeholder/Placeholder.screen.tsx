import { View } from 'react-native';
import { Text } from '../../components/atoms';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';

export default function PlaceholderScreen(props: { name: string }) {
  return (
    <ScreenWrapper>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Text size="xxl" weight="bold">
          {props.name}
        </Text>
      </View>
    </ScreenWrapper>
  );
}
