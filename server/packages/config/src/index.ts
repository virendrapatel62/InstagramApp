import * as dotenv from 'dotenv';
dotenv.config({
  path: '../../../.env',
});

export const authConfig = {
  appName: process.env.AUTH_APP_NAME || '',
  port: Number(process.env.AUTH_APP_PORT) || 3000,
};

export const streamConfig = {
  appName: process.env.STREAM_APP_NAME || '',
  port: Number(process.env.STREAM_APP_PORT) || 3001,
};

export const environment = {
  jwtSecret: process.env.JWT_SECRET || 'default-secret',
  dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/mydb',
};

export const userRoles = {
  admin: 'admin',
  user: 'user',
};
