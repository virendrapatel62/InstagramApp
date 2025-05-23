import express from 'express';
import { streamConfig } from './config';

const streamApp = express();

const appName = streamConfig.appName;
const port = streamConfig.port;

streamApp.listen(port, () => {
  console.log(`${appName} app is listening on port ${port}`);
});

streamApp.get('/live/ping', (request, response) => {
  response.json({
    app: appName,
    message: 'pong',
  });
});
