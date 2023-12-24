/* eslint-disable implicit-arrow-linebreak */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => v.length === 10, // Validate the length of the phone number
      message: (props) =>
        `${props.value} is not a valid phone number. It should be exactly 10 characters long.`,
    },
  },
  email: { type: String },

  // Real name of user
  name: {
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
  },

  bio: { type: String },

  // URL of the avatar image
  avatar: { type: String },

  // IDs of the followers
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  // IDs of the following
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

  // IDs of the posts
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
