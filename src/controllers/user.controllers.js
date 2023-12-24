/* eslint-disable import/no-extraneous-dependencies */
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const getUserFromDB = async (userName = '') => {
  try {
    if (userName) {
      // return one
      return await User.findOne({ userName });
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
    const newUser = await User.create(user);
    newUser.save();

    return newUser;
  } catch (err) {
    console.error('ADDING USER TO DB: ', err);
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
        message: 'An account already exists with this user name.',
      });
    }

    // Add user to DB
    const newUser = await addUserToDB(body);

    // Generate JWT
    const user = {
      userName,
      phoneNumber,
    };

    const token = jwt.sign(user, process.env.SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      message: 'Signed Up Succesfully',
      user: newUser,
      token,
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
        message: 'Invalid username or password.',
      });
    }

    delete user.password;

    const userObj = {
      userName: user?.userName,
      phoneNumber: user?.phoneNumber,
    };

    const token = jwt.sign(userObj, process.env.SECRET, {
      expiresIn: '1h',
    });

    return res.status(200).json({
      message: 'Logged In Succesfully',
      user,
      token,
    });
  }

  return res.status(400).json({ message: 'Please check the request body.' });
};

const getUser = async (req, res) => {
  try {
    const user = await getUserFromDB(req.params.id);

    return res.status(200).json({
      message: 'Fetched user successfully.',
      user,
    });
  } catch (error) {
    console.error('GET USER: ', error);

    return res.status(500).json({
      message: 'There was an error while fetching the users.',
      error,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await getUserFromDB();

    return res.status(200).json({
      message: 'Fetched users successfully.',
      users,
    });
  } catch (error) {
    console.error('GET ALL USERS: ', error);

    return res.status(500).json({
      message: 'There was an error while fetching the users.',
      error,
    });
  }
};

module.exports = {
  userSignUp,
  userLogin,
  getUser,
  getAllUsers,
};
