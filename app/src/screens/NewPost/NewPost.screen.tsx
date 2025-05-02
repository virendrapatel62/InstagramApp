import { View } from 'react-native';
import { Text } from '../../components/atoms';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import Flex from '../../components/atoms/Flex/Flex.component';

export default function NewPostScreen() {
  return (
    <ScreenWrapper>
      <Flex fill center>
        <Text size="title">New Post Screen</Text>
      </Flex>
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
