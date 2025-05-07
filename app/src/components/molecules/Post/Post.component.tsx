import React, { useRef, useState } from 'react';
import {
  getRandomContent,
  getRandomImage,
  getRandomUser,
} from '../../../lib/seed';
import { Icon, Image, Text } from '../../atoms';
import { Pressable, ViewStyle } from 'react-native';
import Flex from '../../atoms/Flex/Flex.component';
import { View } from 'react-native';
import createStyle from './Post.styles';
import { useTheme } from '../../../theme';
import MultiTap from 'react-native-multitap';
import { Spacer, Stack } from 'react-native-flex-layout';

interface IPostProps {
  thumbnail: string;
  style?: ViewStyle;
}

export default function Post(props: IPostProps) {
  const { theme } = useTheme();
  const styles = createStyle(theme);
  const caption = useRef(
    getRandomContent(Math.floor(Math.random() * 20)),
  ).current;
  const profilePic = useRef(getRandomImage(100)).current;
  const username = useRef(getRandomUser().username).current;

  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const [liked, setLiked] = useState(false);

  const likes = 123456 + (liked ? 1 : 0);

  function formatLikes() {
    const formatter = new Intl.NumberFormat('en-IN');
    return formatter.format(likes);
  }

  function toggleLike() {
    setLiked(!liked);
  }

  function likeByDoubleClick() {
    setShowHeartOverlay(true);
    toggleLike();
    setTimeout(() => {
      setShowHeartOverlay(false);
    }, 1000);
  }

  return (
    <Stack spacing={8}>
      <Flex
        style={{
          marginHorizontal: 16,
          gap: 12,
        }}
        items="center"
        direction="row">
        <Image height={50} aspectRatio={1} rounded src={profilePic}></Image>

        <Flex fill>
          <Stack>
            <Text weight="semiBold">{username}</Text>
            <Text size="sm" weight="normal">
              Suggested for you
            </Text>
          </Stack>
        </Flex>

        <Icon size={20} name="ellipsis-v"></Icon>
      </Flex>
      <MultiTap onDoubleTap={likeByDoubleClick} style={styles.imageContainer}>
        <Image
          style={styles.image}
          width={'100%'}
          aspectRatio={0.9}
          src={props.thumbnail}></Image>
        {showHeartOverlay && (
          <Icon
            style={styles.heartOverlay}
            size={64}
            name="heart"
            color="white"></Icon>
        )}
      </MultiTap>
      <Stack
        spacing={6}
        style={{
          margin: 8,
          marginHorizontal: 16,
        }}>
        <Flex
          direction="row"
          style={{
            gap: 16,
          }}>
          <Icon
            color={liked ? 'red' : 'black'}
            onPress={toggleLike}
            name={liked ? 'heart' : 'heart-o'}></Icon>
          <Icon name="comment-o"></Icon>
          <Icon name="send"></Icon>
        </Flex>

        <Text weight={'black'}>{formatLikes()} likes</Text>
        <Text weight="normal">{caption}</Text>
      </Stack>
    </Stack>
  );
}
