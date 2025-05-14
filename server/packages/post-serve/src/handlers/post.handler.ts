import { Request, Response } from 'express';
import { Post } from '../models';
// {
//     "caption": "This is a test post",
//     "allowLinks": true,
//     "allowComments": true,
//     "media": ["662b7680c154e4cba76e38f1", "662b76a4c154e4cba76e38f3"]
//   }

const DEFAULT_PAGE_SIZE = 10;
export const createPostHandler = async (req: Request, res: Response) => {
  try {
    const { caption, allowLinks, allowComments, media } = req.body;

    if (!media || !Array.isArray(media) || media.length === 0) {
      res.status(400).json({ message: 'Media is required' });
      return;
    }

    const newPost = {
      caption: caption || '',
      allowLinks,
      allowComments,
      media,
    };

    const savedPost = await Post.create(newPost);

    res.status(201).json({
      message: 'Post created successfully',
      post: savedPost,
    });
    return;
  } catch (error: any) {
    console.error('error creating post:', error);
    res.status(500).json({ message: 'Internal Server Error' });
    return;
  }
};

export const getAllPostsHandler = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = DEFAULT_PAGE_SIZE;
    const skip = (page - 1) * limit;

    const totalPosts = await Post.countDocuments();

    const posts = await Post.find()
      .sort({ createdAt: -1 }) //  Sort by latest
      .skip(skip)
      .limit(limit)
      .populate('media');

    res.status(200).json({
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
      totalPosts,
      posts,
    });
  } catch (error: any) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
