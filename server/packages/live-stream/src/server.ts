import express from 'express';

const streamApp = express();

const appName = 'live-stream';
const port = 3001;

streamApp.listen(port, () => {
  console.log(`${appName} app is listening on port ${port}`);
});

streamApp.get('/live/ping', (request, response) => {
  response.json({
    app: appName,
    message: 'pong',
  });
});
