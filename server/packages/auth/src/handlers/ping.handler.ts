import { RequestHandler } from 'express';
import { authConfig } from '../config';

export const pingHandler: RequestHandler = (request, response) => {
  response.json({
    app: authConfig.appName,
    message: 'pong',
  });
};
