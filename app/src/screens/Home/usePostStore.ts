import { create } from "zustand";
import axios from "axios";

export type Post = {
  _id: string;
  caption: string;
  media: string[];
  createdAt: string;
};

type PostStore = {
  posts: Post[];
  page: number;
  hasMore: boolean;
  loading: boolean;
  fetchPosts: (params: { reset?: boolean }) => Promise<void>;
};

export const usePostStore = create<PostStore>((set, get) => ({
  posts: [],
  page: 1,
  hasMore: true,
  loading: false,
  fetchPosts: async (params) => {
    const { posts, hasMore, loading } = get();
    const page = params.reset ? 1 : get().page;

    if (!hasMore || loading) return;

    set({ loading: true });

    try {
      const res = await axios.get(
        `http://192.168.29.193:5002/api/post-serve/posts?page=${page}`
      );
      const newPosts = res.data.posts;

      set({
        posts: [...newPosts],
        page: page + 1,
        hasMore: newPosts.length > 0,
        loading: false,
      });
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      set({ loading: false });
    }
  },
}));
