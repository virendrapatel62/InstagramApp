import BottomTabs from '../BottomTabs/BottomTabs';
import SplashScreen from '../../screens/Splash/Splash.screen';
import PlaceholderScreen from '../../screens/Placeholder/Placeholder.screen';
import { SCREENS } from '..';
import { IScreenConfig } from './BottomTab.config';
import Notifications from '../../screens/Notifications/Notifications.screen';
import Messages from '../../screens/Messages/Messages.screen';

export const rootStackConfig: IScreenConfig[] = [
  {
    name: SCREENS.SPLASH,
    component: SplashScreen,
    options: { headerShown: false },
  },
  {
    name: SCREENS.HOME_TABS,
    component: BottomTabs,
    options: { headerShown: false, animation: 'fade' },
  },
  {
    name: SCREENS.MESSAGES,
    component: Messages,
    options: { headerShown: false },
  },
  {
    name: SCREENS.NOTIFICATIONS,
    component: Notifications,
    options: { headerShown: false },
  },
];
