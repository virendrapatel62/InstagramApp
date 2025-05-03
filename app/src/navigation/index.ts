import { useNavigation } from '@react-navigation/native';

export { useNavigation };

export const SCREENS = {
  SPLASH: 'Splash',
  HOME: 'Home',
  HOME_TABS: 'HomeTabs',
  SEARCH: 'Search',
  POST: 'Post',
  REELS: 'Reels',
  PROFILE: 'Profile',
  MESSAGES: 'Messages',
  NOTIFICATIONS: 'Notifications',
};

export function navigateToMessages(
  navigation: ReturnType<typeof useNavigation<any>>,
) {
  navigation.navigate(SCREENS.MESSAGES);
}

export function navigateToNotifications(
  navigation: ReturnType<typeof useNavigation<any>>,
) {
  navigation.navigate(SCREENS.NOTIFICATIONS);
}

export function navigateToHomeScreen(
  navigation: ReturnType<typeof useNavigation<any>>,
) {
  navigation.navigate(SCREENS.HOME_TABS);
}

export function navigateToSearchScreen(
  navigation: ReturnType<typeof useNavigation<any>>,
  options?: {
    fromLongPress?: boolean;
  },
) {
  navigation.navigate(SCREENS.HOME_TABS, {
    screen: SCREENS.SEARCH,
    params: options,
  });
}
