import express from 'express';

const streamApp = express();

const appName = 'template';
const port = 5999;

streamApp.listen(port, () => {
  console.log(`${appName} app is listening on port ${port}`);
});

streamApp.get('/live/ping', (request, response) => {
  response.json({
    app: appName,
    message: 'pong',
  });
});
