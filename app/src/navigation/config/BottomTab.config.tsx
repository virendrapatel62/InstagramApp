import React, { ReactNode } from 'react';
import { Icon, Image } from '../../components/atoms';
import ReelIcon from '../../components/icons/Reel.icon';
import { placeholderProfilePicture } from '../../lib/images';

import { StackAnimationTypes } from 'react-native-screens';
import { navigateToSearchScreen, SCREENS } from '..';
import ExploreReels from '../../screens/ExploreReels/ExploreReels.screen';
import HomeScreen from '../../screens/Home/Home.screen';
import NewPostScreen from '../../screens/NewPost/NewPost.screen';
import Profile from '../../screens/Profile/Profile.screen';
import SearchScreen from '../../screens/Search/Search.screen';

export interface IScreenConfig {
  name: string;
  component: (props: any) => ReactNode;
  icon?: () => ReactNode;
  options?: {
    headerShown?: boolean;
    animation?: StackAnimationTypes;
  };
  onLongPress?: () => void;
}

export const getBottomTabsConfig: (
  navigation: any,
) => IScreenConfig[] = navigation => [
  {
    name: SCREENS.HOME,
    component: HomeScreen,
    icon: () => <Icon name="home" lib="Entypo" size={24} />,
    options: {},
  },
  {
    name: SCREENS.SEARCH,
    component: SearchScreen,
    icon: () => <Icon name="search1" lib="AntDesign" size={24} />,
    options: {},
    onLongPress() {
      navigateToSearchScreen(navigation, {
        fromLongPress: true,
      });
    },
  },
  {
    name: SCREENS.POST,
    component: NewPostScreen,
    icon: () => <Icon name="plus-square-o" size={26} />,
    options: {},
  },
  {
    name: SCREENS.REELS,
    component: ExploreReels,
    icon: () => <ReelIcon size={22} />,
    options: {},
  },
  {
    name: SCREENS.PROFILE,
    component: Profile,
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
