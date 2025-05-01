import { Flex as FlexLib, FlexProps } from 'react-native-flex-layout';
import React from 'react';

type IFlexProps = FlexProps;

export default function Flex({ children, ...props }: IFlexProps) {
  return <FlexLib {...props}>{children}</FlexLib>;
}
