/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const userControllers = require('../controllers/user.controllers');

const multer = require('multer');

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads');
  },
  filename: function (req, file, cb) {
    // Set the filename as current date/time plus original file extension
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log('USER SECTION ACCESSED');
  next();
});

userRouter.post('/', upload.single('file'), userControllers.getAllUsers);
userRouter.get('/:id', userControllers.getUser);

userRouter.post('/login', userControllers.userLogin);
userRouter.post('/signup', userControllers.userSignUp);

module.exports = userRouter;
