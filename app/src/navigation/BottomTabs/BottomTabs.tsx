import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Fragment } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Image } from '../../components/atoms';
import ReelIcon from '../../components/icons/Reel.icon';
import { placeholderProfilePicture } from '../../lib/images';
import { useTheme } from '../../theme';

import { SCREENS, useNavigation } from '..';
import { getBottomTabsConfig } from '../config/BottomTab.config';

const BottomTabNavigator = createBottomTabNavigator();

const renderIcon = (tabName: string, size = 24) => {
  switch (tabName) {
    case 'home':
      return <Icon size={size} name="home" lib="Entypo" />;
    case 'search':
      return <Icon size={size} name="search1" lib="AntDesign" />;
    case 'post':
      return <Icon size={size + 2} name="plus-square-o" />;
    case 'reels':
      return <ReelIcon size={size - 2} />;
    case 'profile':
      return (
        <Image
          src={placeholderProfilePicture}
          height={size}
          aspectRatio={1}
          rounded
        />
      );
    default:
      return <Fragment />;
  }
};

export default function BottomTabs() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const config = getBottomTabsConfig(navigation);

  const commonOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarButton(props: any) {
      return (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <View {...props}>{props.children}</View>
        </TouchableWithoutFeedback>
      );
    },
  };

  return (
    <BottomTabNavigator.Navigator
      initialRouteName={SCREENS.CREATE_POST}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarItemStyle: {
          paddingTop: 8,
        },
      }}>
      {config.map(tab => {
        return (
          <BottomTabNavigator.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              ...commonOptions,
              tabBarStyle: Object.assign(
                {
                  backgroundColor: theme.colors.background,
                },
                tab?.options?.tabBarStyle,
              ),
              tabBarIcon: tab.icon,
              headerShown: !!tab.options?.headerShown,
              animation: 'shift',
              tabBarButton(props) {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onLongPress={tab.onLongPress}
                    onPress={props.onPress}
                    key={tab.name}>
                    {props.children}
                  </TouchableOpacity>
                );
              },
            }}
          />
        );
      })}
    </BottomTabNavigator.Navigator>
  );
}
