import React, { Fragment, PropsWithChildren } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IScreenWrapperProps extends PropsWithChildren {
  safeArea?: boolean;
}

const ScreenWrapper = (props: IScreenWrapperProps) => {
  const { theme } = useTheme();
  const { children, safeArea } = props;

  const Wrapper = safeArea == false ? Fragment : SafeAreaView;

  const containerStyle = [
    styles.container,
    { backgroundColor: theme.background },
  ];

  return (
    <Wrapper style={containerStyle}>
      <View style={styles.container}>{children}</View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenWrapper;
