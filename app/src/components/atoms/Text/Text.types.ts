import { FunctionComponent, PropsWithChildren } from 'react';
import { TextProps } from 'react-native';
import { fontSizes, fontWeights } from '../font';

export interface ITextProps extends TextProps {
  size?: keyof typeof fontSizes;
  weight?: keyof typeof fontWeights;
  color?: string;
  children: React.ReactNode;
}

export type IText = FunctionComponent<PropsWithChildren<ITextProps>>;
