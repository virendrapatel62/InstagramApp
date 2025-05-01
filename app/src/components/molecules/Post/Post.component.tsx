import React from 'react';
import { getRandomImage } from '../../../lib/seed';
import { Image } from '../../atoms';
import { ViewStyle } from 'react-native';
import Flex from '../../atoms/Flex/Flex.component';

interface IPostProps {
  thumbnail: string;
  style?: ViewStyle;
}

export default function Post(props: IPostProps) {
  return (
    <Flex>
      <Image width={'100%'} aspectRatio={0.9} src={props.thumbnail}></Image>
    </Flex>
  );
}
