import { Flex as FlexLib, FlexProps } from "react-native-flex-layout";
import React from "react";

type IFlexProps = FlexProps & {
  gap?: number;
};

export default function Flex({ children, ...props }: IFlexProps) {
  return (
    <FlexLib
      {...props}
      style={[
        {
          gap: props.gap,
        },
        props.style,
      ]}
    >
      {children}
    </FlexLib>
  );
}
