import React from 'react';
import { ActivityIndicator, Switch, View } from 'react-native';
import { Box, Spacer } from 'react-native-flex-layout';
import { Image, Text } from '../../components/atoms';
import Button from '../../components/atoms/Button/Button.component';
import Flex from '../../components/atoms/Flex/Flex.component';
import TextField from '../../components/atoms/TextField/TextField.component';
import ListView from '../../components/layouts/ListView/ListView.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { useTheme } from '../../theme';
import { useNewPostStore } from './useNewPostStore';
import { useNavigation } from '@react-navigation/native';
import { navigateToHomeScreen } from '../../navigation';


export default function NewPostCaptionScreen() {
  const store = useNewPostStore();
  const { selectedImages } = store.post;
  const { theme } = useTheme();
  const naviagtion = useNavigation()

  const handleShare = async () => {
    store.createPost(()=>{
      navigateToHomeScreen(naviagtion)
    })
  };

  return (
    <ScreenWrapper>
      <Box style={{ flex: 1 }}>
        <ListView
          showsHorizontalScrollIndicator={false}
          horizontal
          data={selectedImages}
          ItemSeparatorComponent={() => <Spacer p={8} />}
          contentContainerStyle={{
            paddingHorizontal: 16,
          }}
          renderItem={({ index, item }) => {
            return (
              <Image
                key={index}
                height={400}
                rounded={16}
                aspectRatio={0.9}
                source={{
                  uri: item.uri,
                }}></Image>
            );
          }}></ListView>

        <Box style={{ flexGrow: 1 }}>
          <Box p={16}>
            <TextField
              onChangeText={store.setCaption}
              borderLess
              multiline
              placeholder="Add a caption..."></TextField>
          </Box>
          <View style={{ padding: 16 }}>
            <Flex justify="between" direction="row" items="center">
              <Text size={'md'}>Allow Comments</Text>
              <Switch
                trackColor={{
                  true: theme.colors.darkGray,
                  false: theme.colors.switchTrackOff,
                }}
                value={store.post.allowComments}
                thumbColor={theme.colors.switchThumbOn}
                onValueChange={store.setAllowComments}
              />
            </Flex>

            <Flex justify="between" direction="row" items="center">
              <Text size={'md'}>Allow Likes</Text>
              <Switch
                trackColor={{
                  true: theme.colors.darkGray,
                  false: theme.colors.switchTrackOff,
                }}
                thumbColor={theme.colors.switchThumbOn}
                value={store.post.allowLikes}
                onValueChange={store.setAllowLikes}
              />
            </Flex>
          </View>
        </Box>

        <Box mh={16} mb={30}>
          <Button
            onPress={handleShare}
            title="Share"
            loading={store.loading}
            loadingMessage="Posting.."></Button>
        </Box>
      </Box>
    </ScreenWrapper>
  );
}
