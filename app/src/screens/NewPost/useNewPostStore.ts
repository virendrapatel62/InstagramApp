import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface IGalleryImage {
  id: string;
  uri: string;
}

interface PostState {
  post: {
    selectedImages: IGalleryImage[];
    caption: string;
    allowComments: boolean;
    allowLikes: boolean;
  };
  selectedImagesMap: Record<string, boolean>;

  // Actions
  setSelectedImages: (images: IGalleryImage[]) => void;
  addImage: (image: IGalleryImage) => void;
  removeImage: (id: string) => void;
  setCaption: (caption: string) => void;
  setAllowComments: (value: boolean) => void;
  setAllowLikes: (value: boolean) => void;
  reset: () => void;
  isSelected: (id: string) => boolean; // Function to check if an image is selected
}

export const useNewPostStore = create<PostState>()(
  immer((set, get) => ({
    post: {
      selectedImages: [],
      caption: '',
      allowComments: true,
      allowLikes: true,
    },
    selectedImagesMap: {},

    setSelectedImages: images => {
      set(state => {
        state.post.selectedImages = images;
        // Update the selectedImagesMap based on the new selectedImages array
        state.selectedImagesMap = images.reduce((acc, image) => {
          acc[image.id] = true;
          return acc;
        }, {} as Record<string, boolean>);
      });
    },

    addImage: image => {
      set(state => {
        state.post.selectedImages.push(image);
        state.selectedImagesMap[image.id] = true;
      });
    },

    removeImage: id => {
      set(state => {
        state.post.selectedImages = state.post.selectedImages.filter(
          img => img.id !== id,
        );
        delete state.selectedImagesMap[id];
      });
    },

    setCaption: caption => {
      set(state => {
        state.post.caption = caption;
      });
    },

    setAllowComments: value => {
      set(state => {
        state.post.allowComments = value;
      });
    },

    setAllowLikes: value => {
      set(state => {
        state.post.allowLikes = value;
      });
    },

    reset: () => {
      console.log('🔁 Reset function called');
      set(state => {
        state.post = {
          allowComments: true,
          allowLikes: true,
          caption: '',
          selectedImages: [],
        };
        state.selectedImagesMap = {};
      });
    },

    isSelected: id => {
      // Return true or false based on the presence of the id in the selectedImagesMap
      return !!get().selectedImagesMap[id];
    },
  })),
);

useNewPostStore.subscribe(() => {
  console.log(useNewPostStore.getState());
});
