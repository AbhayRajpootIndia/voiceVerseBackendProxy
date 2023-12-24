/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const userControllers = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('USER SECTION ACCESSED');
  next();
});

userRouter.post('/signup', userControllers.userSignUp);
userRouter.get('/login', userControllers.userLogin);
userRouter.get('/', userControllers.getAllUsers);
userRouter.get('/:id', userControllers.getUser);

module.exports = userRouter;
