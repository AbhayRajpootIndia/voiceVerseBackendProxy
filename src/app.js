const express = require('express');

// routers
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

const VERSION = '/v1';

// Middleware
app.use(express.json());

// Routes
app.use(`${VERSION}/user`, userRouter);
app.use(`${VERSION}/post`, postRouter);
app.get(`${VERSION}/welcome`, async (req, res) => {
  return res.status(200).json({
    message: 'welcome'
  });
});

module.exports = app;
