import BottomTabs from '../BottomTabs/BottomTabs';
import SplashScreen from '../../screens/Splash/Splash.screen';
import PlaceholderScreen from '../../screens/Placeholder/Placeholder.screen';
import { SCREENS } from '..';
import { IScreenConfig } from './BottomTab.config';
import Notifications from '../../screens/Notifications/Notifications.screen';
import Messages from '../../screens/Messages/Messages.screen';
import NewPostCaptionScreen from '../../screens/NewPost/NewPostCaption.screen';
import NewPostFiltersScreen from '../../screens/NewPost/NewPostFilters.screen';

export const rootStackConfig: IScreenConfig[] = [
  {
    name: SCREENS.SPLASH,
    title: SCREENS.SPLASH,
    component: SplashScreen,
    options: { headerShown: false },
  },
  {
    name: SCREENS.HOME_TABS,
    title: SCREENS.HOME_TABS,
    component: BottomTabs,
    options: { headerShown: false, animation: 'fade' },
  },
  {
    name: SCREENS.MESSAGES,
    title: SCREENS.MESSAGES,
    component: Messages,
    options: { headerShown: false },
  },
  {
    name: SCREENS.NOTIFICATIONS,
    title: SCREENS.NOTIFICATIONS,
    component: Notifications,
    options: { headerShown: false },
  },
  {
    name: SCREENS.CREATE_POST_CAPTION,
    title: 'Caption',
    component: NewPostCaptionScreen,
    options: { headerShown: true },
  },
  {
    name: SCREENS.CREATE_POST_FILTERS,
    title: 'Apply Filters',
    component: NewPostFiltersScreen,
    options: { headerShown: true },
  },
];
