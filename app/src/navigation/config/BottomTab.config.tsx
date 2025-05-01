import React, { Fragment, ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableWithoutFeedback, View } from 'react-native';
import { useTheme } from '../../theme';
import { Icon, Image } from '../../components/atoms';
import ReelIcon from '../../components/icons/Reel.icon';
import { placeholderProfilePicture } from '../../lib/images';

import HomeScreen from '../../screens/Home/Home.screen';
import NewPostScreen from '../../screens/NewPost/NewPost.screen';
import PlaceholderScreen from '../../screens/Placeholder/Placeholder.screen';
import { SCREENS } from '..';
import { StackAnimationTypes } from 'react-native-screens';

export interface IScreenConfig {
  name: string;
  component: React.FC;
  icon?: () => ReactNode;
  options?: {
    headerShown?: boolean;
    animation?: StackAnimationTypes;
  };
}

export const bottomTabsConfig: IScreenConfig[] = [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    icon: () => <Icon name="home" lib="Entypo" size={24} />,
    options: {},
  },
  {
    name: SCREENS.SEARCH,
    component: () => <PlaceholderScreen name="Search" />,
    icon: () => <Icon name="search1" lib="AntDesign" size={24} />,
    options: {},
  },
  {
    name: SCREENS.POST,
    component: NewPostScreen,
    icon: () => <Icon name="plus-square-o" size={26} />,
    options: {},
  },
  {
    name: SCREENS.REELS,
    component: () => <PlaceholderScreen name="Reels" />,
    icon: () => <ReelIcon size={22} />,
    options: {},
  },
  {
    name: SCREENS.PROFILE,
    component: () => <PlaceholderScreen name="Profile" />,
    icon: () => (
      <Image
        src={placeholderProfilePicture}
        height={24}
        aspectRatio={1}
        rounded
      />
    ),
    options: {},
  },
];
