import React, { useEffect, useRef, useState } from "react";
import { ViewStyle } from "react-native";
import { Stack } from "react-native-flex-layout";
import MultiTap from "react-native-multitap";
import { getRandomImage, getRandomUser } from "../../../lib/seed";
import { useTheme } from "../../../theme";
import { Icon, Image, Text } from "../../atoms";
import Flex from "../../atoms/Flex/Flex.component";
import createStyle from "./Post.styles";

interface IPostProps {
  thumbnail: string;
  caption: string;
  allowComments: boolean;
  allowLikes: boolean;
  style?: ViewStyle;
}

export default function Post(props: IPostProps) {
  const { theme, isDark } = useTheme();
  const styles = createStyle(theme);
  const caption = props.caption;
  const profilePic = useRef(getRandomImage(100)).current;
  const username = useRef(getRandomUser().username).current;

  const [showHeartOverlay, setShowHeartOverlay] = useState(false);
  const [liked, setLiked] = useState(false);

  const likes = 123456 + (liked ? 1 : 0);

  function formatLikes() {
    const formatter = new Intl.NumberFormat("en-IN");
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
        direction="row"
      >
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
      <MultiTap
        onDoubleTap={props.allowLikes ? likeByDoubleClick : undefined}
        style={styles.imageContainer}
      >
        <Image
          style={styles.image}
          width={"100%"}
          aspectRatio={0.9}
          src={props.thumbnail}
        ></Image>
        {showHeartOverlay && (
          <Icon
            style={styles.heartOverlay}
            size={64}
            name="heart"
            color={isDark ? "white" : "black"}
          ></Icon>
        )}
      </MultiTap>
      <Stack
        spacing={10}
        style={{
          margin: 8,
          marginHorizontal: 16,
        }}
      >
        <Flex
          direction="row"
          style={{
            gap: 16,
          }}
        >
          {props.allowLikes && (
            <Icon
              color={liked ? "red" : "white"}
              onPress={toggleLike}
              name={liked ? "heart" : "heart-o"}
            ></Icon>
          )}
          {props.allowComments && <Icon name="comment-o"></Icon>}
          <Icon name="send"></Icon>
        </Flex>

        <Text weight={"black"}>{formatLikes()} likes</Text>
        <Text weight="normal">{caption}</Text>
      </Stack>
    </Stack>
  );
}
