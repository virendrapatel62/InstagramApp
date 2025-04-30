import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import { colors, fontSizes, fontWeights } from '..';
import { styles } from './Text.style';
import { IText } from './Text.types';

const Text: IText = props => {
  const {
    size = 'md',
    weight = 'normal',
    color = 'textPrimary',
    style,
    children,
    ...rest
  } = props;

  const textStyle = {
    fontSize: fontSizes[size],
    fontWeight: fontWeights[weight],
    color: colors[color],
  };

  return (
    <ReactNativeText style={[styles.text, textStyle, style]} {...rest}>
      {children}
    </ReactNativeText>
  );
};

export default Text;
