// components/atoms/Button.tsx
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../../../theme';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: ViewStyle; // For custom button container styles
  textStyle?: TextStyle; // For custom text styles
  loading?: boolean;
  loadingMessage?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor,
  textColor,
  style,
  textStyle,
  loading,
  loadingMessage,
}) => {
  const { theme } = useTheme(); // Use the theme context for dynamic styling

  console.log({ loading });

  return (
    <TouchableOpacity
      disabled={!!loading}
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: backgroundColor || theme.colors.primary }, // Use theme primary color as default
        style,
      ]}>
      {loading && (
        <ActivityIndicator color={'white'} size={'small'}></ActivityIndicator>
      )}

      <Text
        style={[
          styles.buttonText,
          { color: textColor || theme.colors.white }, // Default text color is white
          textStyle,
        ]}>
        {loading ? loadingMessage : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
