import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import FormData from "form-data";
import axios from "axios";
import type { StateCreator } from "zustand/vanilla";

interface IGalleryImage {
  id: string;
  uri: string;
}

interface PostData {
  selectedImages: IGalleryImage[];
  caption: string;
  allowComments: boolean;
  allowLikes: boolean;
}

interface PostState {
  post: PostData;
  selectedImagesMap: Record<string, boolean>;
  loading: boolean;

  // Actions
  setSelectedImages: (images: IGalleryImage[]) => void;
  addImage: (image: IGalleryImage) => void;
  removeImage: (id: string) => void;
  setCaption: (caption: string) => void;
  setAllowComments: (value: boolean) => void;
  setAllowLikes: (value: boolean) => void;
  reset: () => void;
  isSelected: (id: string) => boolean;
  createPost: (onSuccess: () => void) => Promise<any>;
}

const storeCreator: StateCreator<PostState, [["zustand/immer", never]], []> = (
  set,
  get
) => ({
  post: {
    selectedImages: [],
    caption: "",
    allowComments: true,
    allowLikes: true,
  },
  loading: false,
  selectedImagesMap: {},

  setSelectedImages: (images) => {
    console.log({ images });
    set((state) => {
      state.post.selectedImages = images;
      state.selectedImagesMap = images.reduce((acc, image) => {
        acc[image.id] = true;
        return acc;
      }, {} as Record<string, boolean>);
    });
  },
  addImage: (image) => {
    set((state) => {
      state.post.selectedImages.push(image);
      state.selectedImagesMap[image.id] = true;
    });
  },

  removeImage: (id) => {
    set((state) => {
      state.post.selectedImages = state.post.selectedImages.filter(
        (img) => img.id !== id
      );
      delete state.selectedImagesMap[id];
    });
  },

  setCaption: (caption) => {
    set((state) => {
      state.post.caption = caption;
    });
  },

  setAllowComments: (value) => {
    set((state) => {
      state.post.allowComments = value;
    });
  },

  setAllowLikes: (value) => {
    set((state) => {
      state.post.allowLikes = value;
    });
  },

  reset: () => {
    console.log("🔁 Reset function called");
    set((state) => {
      state.post = {
        allowComments: true,
        allowLikes: true,
        caption: "",
        selectedImages: [],
      };
      state.selectedImagesMap = {};
    });
  },

  isSelected: (id) => {
    return !!get().selectedImagesMap[id];
  },

  async createPost(onSuccess) {
    const { post } = get();
    const { selectedImages, ...otherFields } = post;

    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("images", {
        uri: image.uri,
        type: "image/jpeg",
        name: `image_${image.id}.jpg`,
      } as any);
    });

    set((state) => {
      state.loading = true;
    });

    try {
      const uploadResponse = await axios.post(
        "http://192.168.29.193:5002/api/post-serve/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const media = uploadResponse.data.media;

      const postPayload = {
        caption: otherFields.caption,
        allowComments: !!otherFields.allowComments,
        allowLinks: !!otherFields.allowLikes,
        media,
      };

      const postResponse = await axios.post(
        "http://192.168.29.193:5002/api/post-serve/posts",
        postPayload
      );
      console.log("✅ Post created:", postResponse.data);
  
      onSuccess?.();
    } catch (error) {
      console.error("Image upload failed:", error);

     
    }finally{
      set(state=>{
        
        state.loading = false})
    }
  },
});

export const useNewPostStore = create<PostState>()(immer(storeCreator));

useNewPostStore.subscribe((state) => {
  console.log("🧠 Zustand Store Updated:", state);
});
