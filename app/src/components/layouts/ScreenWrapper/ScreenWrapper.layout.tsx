import React, { Fragment, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../../theme';

interface IScreenWrapperProps extends PropsWithChildren {
  safeArea?: boolean;
  style?: ViewStyle;
}

const ScreenWrapper = (props: IScreenWrapperProps) => {
  const { theme } = useTheme();
  const { children, safeArea } = props;

  const bgStyle = { backgroundColor: theme.colors.background };

  const containerStyles = [bgStyle, styles.fullHeight, props.style];

  if (safeArea == false) {
    return (
      <Fragment>
        <View style={containerStyles}>{children}</View>
      </Fragment>
    );
  }

  return (
    <SafeAreaView style={containerStyles} edges={['top', 'left', 'right']}>
      <View style={[styles.fullHeight]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1,
  },
});

export default ScreenWrapper;
