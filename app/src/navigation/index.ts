import { useNavigation } from '@react-navigation/native';

export { useNavigation };
export function navigateToMessages(
  navigation: ReturnType<typeof useNavigation<any>>,
) {
  navigation.navigate('Messages');
}

export function navigateToNotifications(
  navigation: ReturnType<typeof useNavigation<any>>,
) {
  navigation.navigate('Notifications');
}

export function navigateToHomeScreen(
  navigation: ReturnType<typeof useNavigation<any>>,
) {
  navigation.navigate('Home');
}
