import React from 'react';
import { View } from 'react-native';
import { Icon } from '../../atoms';
import Logo from '../../atoms/Logo/Logo.component';
import FacebookMassanger from '../../icons/FacebookMessanger.icon';
import styles from './HomeHeader.styles';
import { useNavigation } from '@react-navigation/native';
import {
  navigateToMessages,
  navigateToNotifications,
} from '../../../navigation';

function HomeHeader() {
  const navigation = useNavigation();

  const handleMessageIconClick = () => {
    navigateToMessages(navigation);
  };
  const handleNoficationIconClick = () => {
    navigateToNotifications(navigation);
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.logoWrapper}>
        <Logo style={styles.logo} />
      </View>
      <View style={styles.iconContainer}>
        <Icon onPress={handleNoficationIconClick} name="heart-o" />
        <FacebookMassanger onPress={handleMessageIconClick} size={22} />
      </View>
    </View>
  );
}

export default HomeHeader;
