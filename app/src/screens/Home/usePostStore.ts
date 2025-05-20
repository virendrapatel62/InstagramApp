import { create } from "zustand";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { PostItem } from "../../components/organisms/PostList/PostList.component";
import { createIconSetFromFontello } from "react-native-vector-icons";

type PostStore = {
  posts: PostItem[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  fetchPosts: (params: { reset?: boolean }) => Promise<void>;
};

export const usePostStore = create<PostStore>()(
  persist<PostStore>(
    (set, get) => ({
      posts: [],
      page: 1,
      hasMore: true,
      loading: false,

      fetchPosts: async (params) => {
        const { hasMore, loading } = get();
        const page = params.reset ? 1 : get().page;

        if (!hasMore || loading) return;

        set({ loading: true });

        try {
          const res = await axios.get(
            `http://192.168.29.193:5002/api/post-serve/posts?page=${page}`
          );
          const newPosts = res.data.posts;

          console.log({ res });

          set((state) => ({
            posts: params.reset ? newPosts : [...state.posts, ...newPosts],
            page: page + 1,
            hasMore: newPosts.length > 0,
            loading: false,
          }));
        } catch (err) {
          console.error("Failed to fetch posts:", err);
          set({ loading: false });
        }
      },
    }),
    {
      name: "post-store",
      storage: {
        getItem: async (name) => {
          const value = await AsyncStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: async (name, value) => {
          await AsyncStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          await AsyncStorage.removeItem(name);
        },
      },
      partialize: (state): any => ({
        posts: state.posts,
        page: state.page,
        hasMore: state.hasMore,
      }),
    }
  )
);
