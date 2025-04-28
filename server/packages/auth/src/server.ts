import express from 'express';
import { pingHandler } from './handlers/ping.handler';
import { authConfig } from './config';

const authApp = express();

authApp.listen(authConfig.port, () => {
  console.log(
    `${authConfig.appName} app is listening on port ${authConfig.port}`
  );
});

authApp.get('/auth/ping', pingHandler);
