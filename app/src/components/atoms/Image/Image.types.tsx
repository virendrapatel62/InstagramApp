import React from 'react';
import { Image, StyleSheet, ImageStyle, DimensionValue } from 'react-native';

interface IImageProps {
  src: string;
  height?: DimensionValue;
  width?: DimensionValue;
  aspectRatio?: number;
  rounded?: boolean | number;
  style?: ImageStyle;
}

export type IImage = React.FC<IImageProps>;
