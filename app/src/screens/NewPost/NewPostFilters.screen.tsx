import React, { Fragment, useRef, useState } from "react";
import { Pressable } from "react-native";
import {
  Grayscale,
  Invert,
  Nightvision,
  Sepia,
  Warm,
} from "react-native-color-matrix-image-filters";
import { Box, Spacer } from "react-native-flex-layout";
import ViewShot from "react-native-view-shot";
import { Icon, Image } from "../../components/atoms";
import Button from "../../components/atoms/Button/Button.component";
import Flex from "../../components/atoms/Flex/Flex.component";
import ListView from "../../components/layouts/ListView/ListView.component";
import ScreenWrapper from "../../components/layouts/ScreenWrapper/ScreenWrapper.layout";
import { getScreenWidth } from "../../lib/screenUtils";
import {
  navigateToNewPostCaptionScreen,
  useNavigation,
} from "../../navigation";
import { useNewPostStore } from "./useNewPostStore";

const allFilters = [Grayscale, Sepia, Invert, Nightvision, Warm];

type Props = {
  index: number;
  item: any;
  AppliedFilterComponent: any;
  viewRefSetter: (ref: any) => void;
  onSelect: (index: number) => void;
};

const ImageWithFilterRenderer: React.FC<Props> = ({
  index,
  item,
  AppliedFilterComponent = Fragment,
  viewRefSetter,
  onSelect,
}) => {
  console.log(AppliedFilterComponent == Grayscale);
  return (
    <Flex position="relative" gap={10}>
      <Pressable onPress={() => onSelect(index)}>
        <ViewShot
          key={`view-${index}`}
          ref={viewRefSetter}
          options={{ format: "jpg", quality: 0.9 }}
        >
          <AppliedFilterComponent>
            <Image
              key={Date.now()}
              aspectRatio={1}
              source={{ uri: item.uri }}
              width={getScreenWidth() - 32}
              style={{
                borderRadius: 16,
                resizeMode: "contain",
              }}
            />
          </AppliedFilterComponent>
        </ViewShot>
      </Pressable>
      <Spacer pv={4} />
      <Flex direction="row" gap={28} ph={16}>
        <Icon onPress={() => onSelect(index)} name="adjust" size={28} />
      </Flex>
    </Flex>
  );
};

export default function NewPostFiltersScreen() {
  const navigation = useNavigation();
  const store = useNewPostStore();
  const viewRefs = useRef<Array<any | undefined>>([]);
  const selectedImages = store.post.selectedImages;

  const [AFilter, setAFilter] = useState<any>(Fragment);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [appliedFilters, setAppliedFilters] = useState<any>([]);

  const handleNext = async () => {
    const results = [];
    try {
      for (let i = 0; i < selectedImages.length; i++) {
        const updated = { ...selectedImages[i] };
        if (viewRefs.current[i]) {
          updated.uri = await viewRefs.current[i].capture();
        }
        results.push(updated);
      }
      store.setSelectedImages(results);
    } catch (error) {
      console.log("Capture Error:", error);
    }
    navigateToNewPostCaptionScreen(navigation);
  };

  const applyFilter = (imageIndex: number, filterIndex: number) => {
    console.log(filterIndex);

    setAFilter(allFilters[filterIndex]);
    setAppliedFilters((prev: Array<any>) => {
      const newFilters = [...prev];
      newFilters[imageIndex] = allFilters[filterIndex];
      return newFilters;
    });
  };

  console.log(AFilter);

  const renderImageItem = ({ index, item }: any) => (
    <ImageWithFilterRenderer
      index={index}
      item={item}
      AppliedFilterComponent={appliedFilters[index]}
      viewRefSetter={(ref) => {
        viewRefs.current[index] = ref;
      }}
      onSelect={setSelectedImageIndex}
    />
  );

  const renderFilterThumb = ({ item: FilterComponent, index }: any) => {
    const uri = selectedImages[selectedImageIndex]?.uri;
    return (
      <Pressable onPress={() => applyFilter(selectedImageIndex, index)}>
        <FilterComponent>
          <Image
            source={{ uri }}
            rounded={16}
            height={100}
            aspectRatio={1}
            style={{ resizeMode: "cover" }}
          />
        </FilterComponent>
      </Pressable>
    );
  };

  console.log(appliedFilters);

  return (
    <Fragment>
      <ScreenWrapper>
        <Box style={{ flex: 1 }}>
          <Flex style={{ flex: 4 }}>
            {/* <AFilter>
              <Image
                source={{ uri: selectedImages[0].uri }}
                rounded={16}
                height={400}
                aspectRatio={1}
                style={{ resizeMode: "cover" }}
              />
            </AFilter> */}

            <ListView
              extraData={appliedFilters}
              keyExtractor={({ id }) => id}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={selectedImages}
              ItemSeparatorComponent={() => <Spacer p={8} />}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              renderItem={renderImageItem}
            />
          </Flex>

          <Flex style={{ flex: 1 }}>
            <ListView
              showsHorizontalScrollIndicator={false}
              horizontal
              data={allFilters}
              extraData={[selectedImageIndex, appliedFilters]}
              ItemSeparatorComponent={() => <Spacer p={8} />}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              renderItem={renderFilterThumb}
            />
          </Flex>

          <Box mh={16} mb={30}>
            <Button onPress={handleNext} title="Next" />
          </Box>
        </Box>
      </ScreenWrapper>
    </Fragment>
  );
}
