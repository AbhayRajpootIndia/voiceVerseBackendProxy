const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  // ID of the author
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  content: {
    // Textual content (optional)
    text: { type: String },

    // Storing the URL to the media file
    media: {
      type: String,
      required: true,
    },

    // Type of content
    contentType: { type: String, enum: ['image', 'video'], required: true },
  },

  createdAt: { type: Date, default: Date.now },

  // IDs of users who liked the post
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],

  comments: [
    {
      commenter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      text: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
