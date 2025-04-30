import { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';

export interface IconProps extends SvgProps {
  size?: number;
  color?: string;
  style?: any;
}

export type IconComponent = FunctionComponent<IconProps>;
