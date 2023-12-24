const express = require('express');

// routers
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/user', userRouter);
app.use('/post', postRouter);

module.exports = app;
