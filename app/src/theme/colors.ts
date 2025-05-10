// theme/colors.ts

const commonColors = {
  gradientStart: '#feda75', // Yellow
  gradientMiddle: '#d62976', // Magenta-pink
  gradientEnd: '#4f5bd5', // Indigo-blue
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
  primary: '#E1306C', // Instagram Pink (Magenta)
  secondary: '#F56040', // Instagram Orange-Red
  error: '#FF3B30',
  success: '#4CD964',

  // UI Elements
  border: '#dbdbdb',
  storyBorder: '#C13584',

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

  // Switch
  switchTrackOn: '#E1306C',
  switchTrackOff: '#cccccc',
  switchThumbOn: '#ffffff',
  switchThumbOff: '#262626',
};

export const darkTheme = {
  // Gradients
  ...commonColors,

  // Background & Surfaces
  background: '#000000',
  card: '#1a1a1a',

  // Text
  textPrimary: '#ffffff',
  textSecondary: '#a8a8a8',

  // Buttons & Accents
  primary: '#E1306C',
  secondary: '#F56040',
  error: '#FF453A',
  success: '#30D158',

  // UI Elements
  border: '#333333',
  storyBorder: '#C13584',

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

  switchTrackOn: '#FF7E99', // Light pinkish-red, visible on black
  switchTrackOff: '#666666', // Medium gray for subtle off state
  switchThumbOn: '#FFD1DC', // Light pink thumb
  switchThumbOff: '#AAAAAA', // Light gray thumb
};
