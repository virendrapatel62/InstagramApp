import React, { useState } from "react";
import { Pressable } from "react-native";
import {
  Grayscale,
  Invert,
  Nightvision,
  Sepia,
  Warm,
} from "react-native-color-matrix-image-filters";
import { Box, Spacer } from "react-native-flex-layout";
import { Image } from "../../components/atoms";
import Button from "../../components/atoms/Button/Button.component";
import Flex from "../../components/atoms/Flex/Flex.component";
import ListView from "../../components/layouts/ListView/ListView.component";
import ScreenWrapper from "../../components/layouts/ScreenWrapper/ScreenWrapper.layout";
import { getScreenWidth } from "../../lib/screenUtils";
import { useTheme } from "../../theme";
import { useNewPostStore } from "./useNewPostStore";
import { useRef } from "react";
import { View } from "react-native";
import ViewShot from "react-native-view-shot";
import {
  navigateToNewPostCaptionScreen,
  useNavigation,
} from "../../navigation";

// Add all filters here
const allFilters = [Grayscale, Sepia, Invert, Nightvision, Warm];

export default function NewPostFiltersScreen() {
  const navigation = useNavigation();
  const store = useNewPostStore();
  const viewRefs = useRef<Array<any | undefined>>([]);
  const selectedImages = store.post.selectedImages;

  // Keep track of filter index for each image
  const [appliedFilters, setAppliedFilters] = useState<number[]>(
    Array(selectedImages.length).fill(-1) // -1 means no filter
  );

  const handleNext = async () => {
    const results = [];

    console.log("Start next");

    try {
      console.log("try");

      if (viewRefs.current?.[0]) {
        for (let i = 0; i < selectedImages.length; i++) {
          const updated = {
            ...selectedImages[i],
          };
          updated.uri = await viewRefs.current[i].capture();
          console.log("Added images");
          results.push(updated);
        }
        store.setSelectedImages(results);
        console.log("after store");
      }
    } catch (error) {
      console.log("catch");
      console.log(error);
    }
    console.log("before store");

    navigateToNewPostCaptionScreen(navigation);

    console.log("after navigation");
  };

  console.log(selectedImages);

  const handleImagePress = (index: number) => {
    setAppliedFilters((prev) => {
      const newFilters = [...prev];
      newFilters[index] = (newFilters[index] + 1) % (allFilters.length + 1); // +1 to include "no filter"
      return newFilters;
    });
  };

  function renderItem({ index, item }: any) {
    const filterIndex = appliedFilters[index];
    const Filter =
      filterIndex >= 0 && filterIndex < allFilters.length
        ? allFilters[filterIndex]
        : React.Fragment;

    return (
      <Pressable key={index} onPress={() => handleImagePress(index)}>
        <ViewShot
          ref={(ref) => {
            viewRefs.current[index] = ref;
          }}
          options={{ format: "jpg", quality: 0.9 }}
        >
          <Filter>
            <Image
              aspectRatio={1}
              source={{ uri: item.uri }}
              width={getScreenWidth() - 32}
              style={{
                borderRadius: 16,
                resizeMode: "contain",
              }}
            />
          </Filter>
        </ViewShot>
      </Pressable>
    );
  }

  return (
    <ScreenWrapper>
      <Box style={{ flex: 1 }}>
        <Flex fill>
          <ListView
            key={3}
            extraData={appliedFilters}
            keyExtractor={({ id }) => id}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={selectedImages}
            ItemSeparatorComponent={() => <Spacer p={8} />}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            renderItem={renderItem}
          />
        </Flex>

        <Box mh={16} mb={30}>
          <Button onPress={handleNext} title="Next" />
        </Box>
      </Box>
    </ScreenWrapper>
  );
}
