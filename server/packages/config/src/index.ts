import * as dotenv from 'dotenv';

dotenv.config({
  path: '../../../.env',
});

const mongoDbUrl = process.env.MONGO_DB_URL;

export const authConfig = {
  appName: process.env.AUTH_APP_NAME || '',
  port: Number(process.env.AUTH_APP_PORT),
};

export const streamConfig = {
  appName: process.env.STREAM_APP_NAME || '',
  port: Number(process.env.STREAM_APP_PORT),
};

export const postServeConfig = {
  appName: process.env.POST_APP_NAME || '',
  port: Number(process.env.POST_APP_PORT),
  mongoDbUrl,
  freeImageHostingApiKey: process.env.FREE_IMAGE_HOSTING_API,
};

export const environment = {
  jwtSecret: process.env.JWT_SECRET || 'default-secret',
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/mydb',
};

export const dbCollectionNames = {
  media: 'Media',
  post: 'Post',
  user: 'User',
};

export const mediaTypes = {
  image: 0,
  video: 1,
};

export const userRoles = {
  admin: 'admin',
  user: 'user',
};
