import { Request, Response } from 'express';
import { Post } from '../models';
// {
//     "caption": "This is a test post",
//     "allowLinks": true,
//     "allowComments": true,
//     "media": ["662b7680c154e4cba76e38f1", "662b76a4c154e4cba76e38f3"]
//   }

export const createPostHandler = async (req : Request, res : Response) => {
  try {
    const { caption, allowLinks, allowComments, media } = req.body;

    if (!media || !Array.isArray(media) || media.length === 0) {
       res.status(400).json({ message: 'Media is required' });
       return  
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
    return ;
  } catch (error: any) {
    console.error('error creating post:', error);
     res.status(500).json({ message: 'Internal Server Error' });
     return 
  }
};
