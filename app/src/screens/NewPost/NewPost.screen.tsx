import { View } from 'react-native';
import { Text } from '../../components/atoms';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';

export default function NewPostScreen() {
  return (
    <ScreenWrapper>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text size="xxl" weight="bold">
          New Post Screen
        </Text>
      </View>
    </ScreenWrapper>
  );
}

/* <Button
title="single file import"
onPress={async () => {
  try {
    const [pickResult] = await pick();
    console.log(pickResult);

    viewDocument({
      uri: pickResult.uri,
      mimeType: pickResult.type || 'img/jpg',
    }).catch(console.error);
  } catch (err: unknown) {
    // see error handling
    console.log(err);
  }
}}
/> */
