// theme/colors.ts

const commonColors = {
  gradientStart: '#feda75',
  gradientMiddle: '#d62976',
  gradientEnd: '#4f5bd5',
};

export const lightTheme = {
  // Gradients
  ...commonColors,

  // Background & Surfaces
  background: '#ffffff',
  card: '#f9f9f9',

  // Text
  textPrimary: '#262626',
  textSecondary: '#8e8e8e',

  // Buttons & Accents
  primary: '#d62976',
  secondary: '#405DE6',
  error: '#FF3B30',
  success: '#4CD964',

  // UI Elements
  border: '#dbdbdb',
  storyBorder: '#c13584',

  // Icons
  icon: '#262626',
  iconInactive: '#8e8e8e',

  // Generic colors
  white: '#ffffff',
  black: '#000000',
  lightGray: '#f2f2f2',
  gray: '#cccccc',
  darkGray: '#333333',

  imagePlaceHolder: '#f0f2f5',
};

export const darkTheme = {
  // Gradients (keep vibrant for contrast)
  ...commonColors,

  // Background & Surfaces
  background: '#000000',
  card: '#1a1a1a',

  // Text
  textPrimary: '#ffffff',
  textSecondary: '#a8a8a8',

  // Buttons & Accents
  primary: '#d62976',
  secondary: '#405DE6',
  error: '#FF453A',
  success: '#30D158',

  // UI Elements
  border: '#333333',
  storyBorder: '#c13584',

  // Icons
  icon: '#ffffff',
  iconInactive: '#8e8e8e',

  // Generic colors
  white: '#ffffff',
  black: '#000000',
  lightGray: '#2c2c2e',
  gray: '#3a3a3c',
  darkGray: '#1c1c1e',

  imagePlaceHolder: '#2c2c2e',
};
