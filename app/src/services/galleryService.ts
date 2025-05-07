import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';

import { requestPhotoLibraryPermission } from '../permissons';
import { Image } from 'react-native-svg';

export interface IGallaryImages {
  uri: string;
  id: string;
}

export const getAllGallaryImages = async (): Promise<IGallaryImages[]> => {
  await requestPhotoLibraryPermission();
  const photos = await CameraRoll.getPhotos({
    first: 100,
    assetType: 'Photos',
  });

  return photos.edges.map(edge => ({
    uri: edge.node.image.uri,
    id: edge.node.id,
  }));
};
