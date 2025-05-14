import { useNavigation } from '@react-navigation/native';
import { Fragment, useEffect, useLayoutEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  ScrollView
} from 'react-native';
import { Box, Spacer } from 'react-native-flex-layout';
import { Icon, Image, Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import {
  navigateToNewPostFiltersScreen
} from '../../navigation';
import {
  getAllGallaryImages,
  IGallaryImages,
} from '../../services/galleryService';
import { useTheme } from '../../theme';
import { useNewPostStore } from './useNewPostStore';

const MAX_ALLOWED_IMAGES = 10;

const HeaderRight = (props: any) => (
  <Box mr={16}>
    <Pressable onPress={props.onNext}>
      <Text size="lg" weight="semiBold">
        Next
      </Text>
    </Pressable>
  </Box>
);

const HeaderLeft = (props: any) => {
  return (
    <Box mh={16}>
      <Icon
        onPress={props.onPress}
        size={24}
        name="close"
        lib="AntDesign"></Icon>
    </Box>
  );
};

export default function NewPostScreen() {
  const navigation = useNavigation();
  const store = useNewPostStore();
  const { theme } = useTheme();
  const selectedImages = store.post.selectedImages;
  const isSelected = store.isSelected;

  const [allImages, setAllImages] = useState<IGallaryImages[]>([]);

  // Function to toggle the selection of images
  const toggleSelection = (image: IGallaryImages) => {
    if (isSelected(image.id)) {
      // If the image is already selected, remove it
      store.removeImage(image.id);
    }

    if (selectedImages.length <= MAX_ALLOWED_IMAGES) {
      store.addImage(image);
    }
  };

  const getAllImages = () => {
    setAllImages([]);
    getAllGallaryImages().then(images => {
      setAllImages(images);
    });
  };

  const handleOnNext = () => {
    if (!selectedImages.length) return;
    navigateToNewPostFiltersScreen(navigation);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onNext={handleOnNext} />,
      headerLeft: () => <HeaderLeft onPress={() => navigation.goBack()} />,
      headerStyle: {
        backgroundColor: theme.colors.background, // Change this color as per your theme
      },
      headerTintColor: theme.colors.textPrimary, // Optional: sets text/icon color
      title: 'New Post',
    });
  }, [navigation, handleOnNext]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getAllImages();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScreenWrapper safeArea={false}>
      <Flex fill direction="column">
        {/* Selected Images List */}
        {!!selectedImages?.length && (
          <Box h={Dimensions.get('window').height * 0.3}>
            <FlatList
              style={{
                flex: 1,
                height: 300,
              }}
              data={selectedImages}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.uri }}
                  rounded={16}
                  aspectRatio={1}
                  height={'100%'}
                />
              )}
              contentContainerStyle={{
                padding: 8,
              }}
              ItemSeparatorComponent={() => <Spacer p={4} />}
            />
          </Box>
        )}

        {/* All Images Grid */}
        <Box
          style={{
            flex: 1,
          }}>
          <ScrollView
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {allImages.map(image => (
              <Pressable
                onPress={() => toggleSelection(image)} // Toggle selection on click
                key={image.id}>
                <Flex
                  p={2}
                  justify="center"
                  items="center"
                  style={{
                    position: 'relative',
                  }}
                  w={Dimensions.get('window').width / 3}>
                  {store.isSelected(image.id) && (
                    <Fragment>
                      <Box position="absolute" zIndex={2} p={4}>
                        <Icon name="check" color="white" size={42} />
                      </Box>
                      <Box
                        position="absolute"
                        w={'100%'}
                        h={'100%'}
                        zIndex={1}
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Black overlay
                        }}></Box>
                    </Fragment>
                  )}
                  <Image
                    source={{
                      uri: image.uri,
                    }}
                    width={'100%'}
                    aspectRatio={1}></Image>
                </Flex>
              </Pressable>
            ))}
          </ScrollView>
        </Box>
      </Flex>
    </ScreenWrapper>
  );
}
