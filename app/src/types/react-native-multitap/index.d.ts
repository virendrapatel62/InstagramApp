declare module 'react-native-multitap' {
  import { ReactNode } from 'react';
  import { GestureResponderEvent, PressableProps } from 'react-native';

  interface MultiTapProps extends PressableProps {
    children: ReactNode;
    delay?: number; // Delay between taps in ms (e.g., 300)
    onSingleTap?: (event: GestureResponderEvent) => void;
    onDoubleTap?: (event: GestureResponderEvent) => void;
    onTripleTap?: (event: GestureResponderEvent) => void;
    onNTaps?: (tapCount: number, event: GestureResponderEvent) => void;
    onLongPress?: (event: GestureResponderEvent) => void;
  }

  const MultiTap: (props: MultiTapProps) => JSX.Element;

  export default MultiTap;
}
