const express = require('express');
const postsRouter = require('./posts-router.js');

const server = express();

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Lambda Posts API</title>
      </head>
      <body>
        <h1>Welcome to the Lambda Posts API</h1>
      </body>
    </html>
    `)
});

module.exports = server;
