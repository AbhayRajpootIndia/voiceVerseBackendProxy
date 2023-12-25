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

    return res.status(200).json({
      message: 'Post added successfully.',
      post: newPost,
    });
  } catch (err) {
    console.log('ADDING POST: ', err);

    return res.status(500).json({
      message: 'An error occured while adding new post.',
      error: err,
    });
  }
};

const removePost = async (req, res) => {
  try {
    const deletedPost = await Post.findOneAndDelete({ _id: req.body.postId });

    if (deletedPost) {
      return res.status(200).json({
        message: 'Post removed successfully.',
        post: deletedPost,
      });
    }

    return res.status(400).json({
      message: `Post with id ${req.body.postId} not found.`,
    });
  } catch (err) {
    console.log('REMOVING POST: ', err);

    return res.status(500).json({
      message: 'An error occured while removing post.',
      error: err,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const update = {};

    if (req.body.content?.text) {
      update['content.text'] = req.body.content?.text;
    }
    if (req.body.content?.media && req.body.content?.contentType) {
      update['content.media'] = req.body.content?.media;
      update['content.contentType'] = req.body.content?.contentType;
    } else if (req.body.content?.media || req.body.content?.contentType) {
      return res.status(400).json({
        message:
          'While updating media, both media and contentType fields are required.',
      });
    }

    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.body.postId },
      update,
      { new: true },
    );

    if (updatedPost) {
      return res.status(200).json({
        message: 'Post updated successfully.',
        post: updatedPost,
      });
    }

    return res.status(400).json({
      message: `Post with id ${req.body.postId} not found.`,
    });
  } catch (err) {
    console.log('UPDATING POST: ', err);

    return res.status(500).json({
      message: 'An error occured while updating the post.',
      error: err,
    });
  }
};

const addCommentToPost = async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $push: { comments: req.body.comment } },
      { new: true },
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

const removeCommentFromPost = async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $pull: { comments: { _id: req.body.commentId } } },
      { new: true },
    );

    res.status(200).json({
      message: 'Comment removed succesfully.',
      comments: updatedPost.comments,
    });
  } catch (err) {
    console.log('ERROR REMOVING COMMENT: ', err);

    res.status(500).json({
      message: 'An error occured while removing comment.',
      error: err,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const associatedPost = await Post.findOne({ _id: req.params.postId });

    if (associatedPost) {
      return res.status(200).json({
        message: 'Comments fetched succesfully.',
        comments: associatedPost.comments,
      });
    }

    return res.status(400).json({
      message: `Post with id ${req.params.postId} not found.`,
    });
  } catch (err) {
    console.log('FETCHING COMMENTS: ', err);

    return res.status(500).json({
      message: 'An error occured while fetching comments.',
      error: err,
    });
  }
};

const addLikeToPost = async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $addToSet: { likes: req.body.likedBy } },
      { new: true },
    );

    res.status(200).json({
      message: 'Like added succesfully.',
      likes: updatedPost.likes,
    });
  } catch (err) {
    console.log('ERROR ADDING LIKE: ', err);

    res.status(500).json({
      message: 'An error occured while adding like.',
      error: err,
    });
  }
};

const removeLikeFromPost = async (req, res) => {
  try {
    const updatedPost = await Post.findOneAndUpdate(
      { _id: req.body.postId },
      { $pull: { likes: req.body.likedBy } },
      { new: true },
    );

    res.status(200).json({
      message: 'Like removed succesfully.',
      likes: updatedPost.likes,
    });
  } catch (err) {
    console.log('ERROR REMOVING LIKE: ', err);

    res.status(500).json({
      message: 'An error occured while removing like.',
      error: err,
    });
  }
};

const getLikes = async (req, res) => {
  try {
    const associatedPost = await Post.findOne({ _id: req.params.postId });

    if (associatedPost) {
      return res.status(200).json({
        message: 'Likes fetched succesfully.',
        likes: associatedPost.likes,
      });
    }

    return res.status(400).json({
      message: `Post with id ${req.params.postId} not found.`,
    });
  } catch (err) {
    console.log('FETCHING LIKES: ', err);

    return res.status(500).json({
      message: 'An error occured while fetching likes.',
      error: err,
    });
  }
};

module.exports = {
  getAllPosts,
  getPost,
  addPost,
  removePost,
  updatePost,
  addCommentToPost,
  getComments,
  removeCommentFromPost,
  addLikeToPost,
  removeLikeFromPost,
  getLikes,
};
