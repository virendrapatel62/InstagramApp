import { useNavigation } from '@react-navigation/native';

export { useNavigation };

export const SCREENS = {
  SPLASH: 'Splash',
  HOME: 'Home',
  HOME_TABS: 'HomeTabs',
  POST: 'Post',
  REELS: 'Reels',
  PROFILE: 'Profile',
  MESSAGES: 'Messages',
  NOTIFICATIONS: 'Notifications',

  SEARCH: 'Search',
  SEARCH_SUGGESTIONS: 'SEARCH_SUGGESTIONS',
  SEARCH_INITIAL_FEED: 'SEARCH_INITIAL_FEED',
  SEARCH_RESULT_TABS: 'SEARCH_TABS',
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
    screen?: string;
  },
) {
  navigation.navigate(SCREENS.HOME_TABS, {
    screen: SCREENS.SEARCH,
    params: options,
  });
}
