const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { type: String, unique: true },

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
