import { Router } from 'express';
import {
  createPostHandler,
  getAllPostsHandler,
} from '../handlers/post.handler';

const postRouter = Router();

postRouter.post('/', createPostHandler);
postRouter.get('/', getAllPostsHandler);

export default postRouter;
