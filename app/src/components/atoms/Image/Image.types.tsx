import React from 'react';
import {
  Image,
  StyleSheet,
  ImageStyle,
  DimensionValue,
  ImageProps,
  ImageSourcePropType,
} from 'react-native';

interface IImageProps {
  src?: string | undefined;
  height?: DimensionValue;
  width?: DimensionValue;
  aspectRatio?: number;
  rounded?: boolean | number;
  style?: ImageStyle;
  source?: ImageSourcePropType | undefined;
}

export type IImage = React.FC<IImageProps>;
