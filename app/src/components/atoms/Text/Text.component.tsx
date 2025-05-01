import React from 'react';
import { Text as ReactNativeText } from 'react-native';

import { fontSizes, fontWeights } from '..';
import { IText } from './Text.types';
import { createStyles } from './Text.styles';
import { useTheme } from '../../../theme';

const Text: IText = props => {
  const { theme } = useTheme();

  const {
    size = 'md',
    weight = 'normal',
    color,
    style,
    children,
    ...rest
  } = props;

  const textStyle: any = {
    fontSize: fontSizes[size],
    fontWeight: fontWeights[weight],
    ...(color
      ? {
          color,
        }
      : {}),
  };

  const styles = createStyles(theme);

  return (
    <ReactNativeText style={[styles.text, textStyle, style]} {...rest}>
      {children}
    </ReactNativeText>
  );
};

export default Text;
