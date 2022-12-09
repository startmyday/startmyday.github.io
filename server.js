const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';

const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.post('/generateimage', (req, res) => {
    res.status(200).json({success: true});
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3030, (err) => {
    if (err) {
      throw err;
    }
    console.log('server ready');
  });
}).catch((ex) => {
  console.error(ex);
  process.exit(1);
})
