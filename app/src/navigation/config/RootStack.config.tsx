import BottomTabs from '../BottomTabs/BottomTabs';
import SplashScreen from '../../screens/Splash/Splash.screen';
import PlaceholderScreen from '../../screens/Placeholder/Placeholder.screen';
import { SCREENS } from '..';
import { IScreenConfig } from './BottomTab.config';

export const rootStackConfig: IScreenConfig[] = [
  {
    name: SCREENS.SPLASH,
    component: SplashScreen,
    options: { headerShown: false },
  },
  {
    name: SCREENS.HOME,
    component: BottomTabs,
    options: { headerShown: false, animation: 'fade' },
  },
  {
    name: SCREENS.MESSAGES,
    component: () => <PlaceholderScreen name="Messages" />,
    options: { headerShown: false },
  },
  {
    name: SCREENS.NOTIFICATIONS,
    component: () => <PlaceholderScreen name="Likes & Comments" />,
    options: { headerShown: false },
  },
];
