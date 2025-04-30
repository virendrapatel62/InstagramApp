import { FunctionComponent, PropsWithChildren } from 'react';
import { TextStyle } from 'react-native';

export type TIconLibType = 'Entypo' | 'FontAwesome' | 'AntDesign';

export interface IIconProps {
  name: string;
  size?: number;
  color?: string;
  style?: TextStyle;
  lib?: TIconLibType;
  onPress?: () => void;
}

export type IIcon = FunctionComponent<PropsWithChildren<IIconProps>>;
