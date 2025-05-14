
import express, { Router } from 'express';
import { postServeConfig } from './config';
import cors from 'cors';
import uploadRouter from './routers/upload.router';
import postRouter from './routers/post.router';

import {connectDB} from './db'
connectDB()

const postApp = express();
postApp.use(cors());
postApp.use(express.json())

const appName = postServeConfig.appName;
const port = postServeConfig.port;

postApp.listen(port, () => {
  console.log(`${appName} app is listening on port ${port}`);
});

const apiRouter = Router();

postApp.use('/api/post-serve', apiRouter);
postApp.use('/api/post-serve/upload', uploadRouter);
postApp.use('/api/post-serve/posts', postRouter);

apiRouter.get('/ping', (request, response) => {
  response.json({
    app: appName,
    message: 'pong',
  });
});
