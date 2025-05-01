import { useNavigation } from '@react-navigation/native';

export { useNavigation };

export const SCREENS = {
  SPLASH: 'Splash',
  HOME: 'Home',
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
  navigation.navigate(SCREENS.HOME);
}
