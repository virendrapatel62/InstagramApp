import React from 'react';
import { Image as NativeImage } from 'react-native';
import { IImage } from './Image.types';
import { useTheme } from '../../../theme';

const Image: IImage = props => {
  const { src, height, width, aspectRatio, rounded = false, style } = props;

  const { theme } = useTheme();

  const borderRadius = typeof rounded === 'number' ? rounded : rounded ? 50 : 0;

  return (
    <NativeImage
      src={src}
      resizeMode="cover"
      source={props.source}
      style={[
        {
          height: height,
          width: width,
          aspectRatio,
          borderRadius,
          backgroundColor: theme.colors.imagePlaceHolder,
        },
        style,
      ]}
    />
  );
};

export default Image;
