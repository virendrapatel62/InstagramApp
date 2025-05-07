import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';
import { PermissionError } from '../lib/errors/PermissionError';

export const requestPhotoLibraryPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'ios') {
    const result = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
    return result === RESULTS.GRANTED || result === RESULTS.LIMITED;
  }

  if (Platform.OS === 'android') {
    const permission =
      Platform.Version >= 33
        ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const result = await request(permission);
    return result === RESULTS.GRANTED;
  }

  throw new PermissionError();
};
