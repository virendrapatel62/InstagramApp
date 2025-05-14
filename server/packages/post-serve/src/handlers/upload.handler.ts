import axios from 'axios';
import { RequestHandler } from 'express';
import FormData from 'form-data';
import fs from 'fs';
import multer from 'multer';
import path from 'path';
import { mediaTypes, postServeConfig } from '../config';
import { Media } from '../models';

const API_KEY = postServeConfig.freeImageHostingApiKey;

const uploadDir = path.join(__dirname, '../temp_uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    console.log({ uploadDir });
    cb(null, uploadDir);
  },
  filename: function (_, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;

    console.log({ uniqueName });
    cb(null, uniqueName);
  },
});

export const uploadMultiple = multer({ storage }).array('images', 10); // max 5 files at a time

const uploadToFreeImage = async (localFilePath: string) => {
  const form = new FormData();
  console.log({ localFilePath, API_KEY });
  form.append('key', API_KEY);
  form.append('action', 'upload');
  form.append('format', 'json');
  form.append('source', fs.createReadStream(localFilePath));

  try {
    const response = await axios.post(
      'https://freeimage.host/api/1/upload',
      form,
      {
        headers: form.getHeaders(),
      }
    );
    const { image } = response.data;

    //  // Save media to DB
    const newMedia = await Media.create({
      mediaType: mediaTypes.image,
      mediaUrl: image.url,
    });

    return newMedia.id;
  } catch (error: any) {
    console.error('Upload failed:', error.response?.data || error.message);
    throw new Error('Image upload failed');
  }
};

const uploadImageHandler: RequestHandler = async (req, res) => {
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    return void res.status(400).json({ error: 'No files uploaded' });
  }

  try {
    const media: any[] = [];

    for (const file of files) {
      const result: any = await uploadToFreeImage(file.path);
      media.push(result);
      fs.unlinkSync(file.path); // cleanup local file
    }
    return void res.json({ success: true, media: media });
  } catch (err) {
    files.forEach(
      (file) => fs.existsSync(file.path) && fs.unlinkSync(file.path)
    );
    return void res.status(500).json({ error: 'Some or all uploads failed' });
  }
};

export { uploadImageHandler };
