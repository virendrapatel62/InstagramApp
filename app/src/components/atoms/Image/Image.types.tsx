import React from 'react';
import { Image, StyleSheet, ImageStyle } from 'react-native';

interface IImageProps {
  src: string;
  height?: number;
  aspectRatio?: number;
  rounded?: boolean | number;
  style?: ImageStyle;
}

export type IImage = React.FC<IImageProps>;
