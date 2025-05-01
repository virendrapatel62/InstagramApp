import { pick } from '@react-native-documents/picker';
import { viewDocument } from '@react-native-documents/viewer';

import { View } from 'react-native';
import { Text } from '../../components/atoms';

export default function NewPostScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text color="black" size="xxl" weight="bold">
        New Post Screen
      </Text>
    </View>
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
