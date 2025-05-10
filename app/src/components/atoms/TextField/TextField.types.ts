import { TextInputProps } from 'react-native';

export interface TextFieldProps extends TextInputProps {
  multiline?: boolean;
  borderLess?: boolean;
}
