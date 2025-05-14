import { Router } from 'express';
import { createPostHandler } from '../handlers/post.handler';

const postRouter = Router();

postRouter.post('/', createPostHandler);

export default postRouter;
