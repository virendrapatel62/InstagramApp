import React from 'react';
import { TextInput, View } from 'react-native';

import { useTheme } from '../../../theme';
import { createStyles } from './TextField.styles';
import { TextFieldProps } from './TextField.types';

const TextField: React.FC<TextFieldProps> = ({
  multiline = false,
  borderLess = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <TextInput
        multiline={multiline}
        style={[
          styles.input,
          multiline && styles.multiline,
          borderLess && styles.noBorder,
          style,
        ]}
        placeholderTextColor={theme.colors.textSecondary}
        {...props}
      />
    </View>
  );
};

export default TextField;
