/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const postControllers = require('../controllers/post.controllers');

const postRouter = express.Router();

postRouter.use((req, res, next) => {
  console.log('POST SECTION ACCESSED');
  next();
});

postRouter.get('/', postControllers.getAllPosts);
postRouter.get('/:id', postControllers.getPost);
postRouter.get('/comment/:postId', postControllers.getComments);

postRouter.post('/', postControllers.addPost);
postRouter.post('/comment/', postControllers.addCommentToPost);

module.exports = postRouter;
