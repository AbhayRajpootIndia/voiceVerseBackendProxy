/* eslint-disable no-console */
const Post = require('../models/post');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});

    res.status(200).json({
      message: 'Posts fetched successfully.',
      posts,
    });
  } catch (err) {
    console.log('FETCHING ALL POSTS: ', err);

    res.status(500).json({
      message: 'An error occured while fetching posts.',
    });
  }
};

const getPost = async (req, res) => {
  try {
    const posts = Post.find({ _id: req?.params?.id });

    res.status(200).json({
      message: 'Posts fetched successfully.',
      posts,
    });
  } catch (err) {
    res.status(500).json({
      message: 'An error occured while fetching post.',
    });
  }
};

const addPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    newPost.save();

    res.status(200).json({
      message: 'Post added successfully.',
      post: newPost,
    });
  } catch (err) {
    console.log('ADDING POST: ', err);

    res.status(500).json({
      message: 'An error occured while adding new post.',
      error: err,
    });
  }
};

const addCommentToPost = async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $push: { comments: req.body.comment } },
      { returnNewDocument: true },
    );

    res.status(200).json({
      message: 'Comment added succesfully.',
      comments: updatedPost.comments,
    });
  } catch (err) {
    console.log('ERROR ADDING COMMENT: ', err);

    res.status(500).json({
      message: 'An error occured while adding comment.',
      error: err,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const associatedPost = await Post.findOne({ _id: req.params.postId });

    res.status(200).json({
      message: 'Comments fetched succesfully.',
      comments: associatedPost?.comments,
    });
  } catch (err) {
    console.log('FETCHING COMMENTS: ', err);

    res.status(500).json({
      message: 'An error occured while fetching comments.',
      error: err,
    });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  addPost,
  addCommentToPost,
  getComments,
};
