import React from 'react';
import { getRandomImage } from '../../../lib/seed';
import { Image } from '../../atoms';
import { ViewStyle } from 'react-native';
import Flex from '../../atoms/Flex/Flex.component';

interface IStoryItemProps {
  seen?: boolean;
  thumbnail: string;
  style?: ViewStyle;
}

export default function StoryItem(props: IStoryItemProps) {
  return (
    <Flex style={props.style}>
      <Image rounded height={80} src={props.thumbnail}></Image>
    </Flex>
  );
}
