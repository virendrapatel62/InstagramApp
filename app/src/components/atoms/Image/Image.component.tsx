import React from 'react';
import { Image as NativeImage, StyleSheet, ImageStyle } from 'react-native';
import { IImage } from './Image.types';

const Image: IImage = props => {
  const { src, height = 100, aspectRatio = 1, rounded = false, style } = props;

  const borderRadius =
    typeof rounded === 'number' ? rounded : rounded ? height / 2 : 0;

  return (
    <NativeImage
      src={src}
      resizeMode="cover"
      style={[
        {
          height,
          width: height * aspectRatio,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

export default Image;
