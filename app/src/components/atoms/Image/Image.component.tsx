import React from 'react';
import { Image as NativeImage, StyleSheet, ImageStyle } from 'react-native';
import { IImage } from './Image.types';

const Image: IImage = props => {
  const { src, height, aspectRatio = 1, rounded = false, style } = props;

  const borderRadius = typeof rounded === 'number' ? rounded : rounded ? 50 : 0;

  return (
    <NativeImage
      src={src}
      resizeMode="cover"
      style={[
        {
          height: height || 'auto',
          width: 'auto',
          aspectRatio: aspectRatio,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

export default Image;
