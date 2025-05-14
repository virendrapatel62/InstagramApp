import express from 'express';
import { uploadImageHandler, uploadMultiple } from '../handlers/upload.handler';

const uploadRouter = express.Router();

uploadRouter.post('/', uploadMultiple, uploadImageHandler);

export default uploadRouter;
