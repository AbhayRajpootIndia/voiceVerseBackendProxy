/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const jwt = require('jsonwebtoken');
const fs = require('fs');

const User = require('../models/user');
const axios = require('axios');

const checkIfUserExist = async (user) => {
  try {
    const { userName, email, phoneNumber } = user;
    const userFromDb = await User.findOne({ userName, email, phoneNumber });

    if (userFromDb) {
      return true;
    }

    return false;
  } catch (err) {
    console.error('CHECKING USER EXISTS: ', err);
    return null;
  }
};

const getUserFromDB = async (userName = '') => {
  try {
    if (userName) {
      // return one
      return await User.findOne({ userName });
    }

    // return all
    return await User.find({});
  } catch (err) {
    console.error('FETCHING USERS FROM DB: ', err);
    return {};
  }
};

const getUserByIdFromDB = async (id = '') => {
  try {
    if (id) {
      // return one
      return await User.findOne({ _id: id });
    }

    // return all
    return await User.find();
  } catch (err) {
    console.error('FETCHING USERS FROM DB: ', err);
    return {};
  }
};

const addUserToDB = async (user) => {
  try {
    const doesUserExist = await checkIfUserExist(user);

    if (doesUserExist) {
      console.log('User with the given credentials already exists.');
      return {};
    }

    const newUser = await User.create(user);
    newUser.save();

    return newUser;
  } catch (err) {
    console.error('ADDING USER TO DB: ', err);

    if (err?.errors && Object.keys(err?.errors).includes('phoneNumber')) {
      return {
        error: true,
        type: 'phoneNumber'
      };
    }

    if (err?.errors && Object.keys(err?.errors).includes('userName')) {
      return {
        error: true,
        type: 'userName'
      };
    }

    return {};
  }
};

const userSignUp = async (req, res) => {
  const body = req?.body;
  const userName = body?.userName;
  const phoneNumber = body?.phoneNumber;
  const password = body?.password;

  if (userName && phoneNumber && password) {
    const userFromDb = await getUserFromDB(userName);

    if (userFromDb) {
      return res.status(403).json({
        message: 'An account already exists with this user name.'
      });
    }

    // Add user to DB
    const newUser = await addUserToDB(body);

    if (newUser?.error && newUser?.type === 'userName') {
      return res.status(403).json({
        message: 'An account already exists with this user name.'
      });
    }
    if (newUser?.error && newUser?.type === 'phoneNumber') {
      return res.status(403).json({
        message: 'Phone number must be 10 digits long.'
      });
    }
    if (!newUser?.userName) {
      return res.status(403).json({
        message: 'An account already exists with this phone number.'
      });
    }

    // Generate JWT
    const user = {
      userName,
      phoneNumber
    };

    const token = jwt.sign(user, process.env.SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Signed Up Succesfully',
      user: newUser,
      token
    });
  }

  return res.status(400).json({ message: 'Please check the request body.' });
};

const userLogin = async (req, res) => {
  const body = req?.body;
  const userName = body?.userName;
  const password = body?.password;

  if (userName && password) {
    const user = await getUserFromDB(userName);

    if (user?.password !== password) {
      return res.status(403).json({
        message: 'Invalid username or password.'
      });
    }

    delete user.password;

    const userObj = {
      userName: user?.userName,
      phoneNumber: user?.phoneNumber
    };

    const token = jwt.sign(userObj, process.env.SECRET, {
      expiresIn: '1h'
    });

    return res.status(200).json({
      message: 'Logged In Succesfully',
      user,
      token
    });
  }

  return res.status(400).json({ message: 'Please check the request body.' });
};

const getUser = async (req, res) => {
  try {
    const user = await getUserByIdFromDB(req.params.id);

    return res.status(200).json({
      message: 'Fetched user successfully.',
      user
    });
  } catch (error) {
    console.error('GET USER: ', error);

    return res.status(500).json({
      message: 'There was an error while fetching the users.',
      error
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No files were uploaded.');
    }

    // File information
    const fileInfo = {
      originalName: req.file.originalname,
      fileName: req.file.filename,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: req.file.size
    };

    const fileObj = new Blob(
      [fs.readFileSync(fileInfo.filePath, (err) => err && console.error(err))],
      {
        type: fileInfo.fileType
      }
    );

    const formData = new FormData();

    formData.set('file', fileObj, fileInfo.fileName);

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow'
    };

    let emotionsData = {};

    await fetch('http://127.0.0.1:5000/extract_emotion', requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        emotionsData = data;
      })
      .catch((error) => console.log(error));

    console.log('emotionsData', emotionsData);

    return res.status(200).json({
      message: 'Succesful',
      emotionsData: emotionsData
    });
  } catch (error) {
    console.error('GET ALL USERS: ', error);

    return res.status(500).json({
      message: 'There was an error while fetching the users.',
      error
    });
  }
};

module.exports = {
  userSignUp,
  userLogin,
  getUser,
  getAllUsers
};
