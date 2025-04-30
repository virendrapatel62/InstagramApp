import {TextProps} from 'react-native';
import {fontSizes, fontWeights} from '../font';
import colors from '../colors';
import {FunctionComponent, PropsWithChildren} from 'react';

export interface ITextProps extends TextProps {
  size?: keyof typeof fontSizes;
  weight?: keyof typeof fontWeights;
  color?: keyof typeof colors;
  children: React.ReactNode;
}

export type IText = FunctionComponent<PropsWithChildren<ITextProps>>;
