const express = require('express');

// routers
const userRouter = require('./routes/user');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/user', userRouter);

module.exports = app;
