/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const postControllers = require('../controllers/post.controllers');

const postRouter = express.Router();

postRouter.use((req, res, next) => {
  console.log('POST SECTION ACCESSED');
  next();
});

postRouter.post('/', postControllers.addPost);
postRouter.delete('/', postControllers.removePost);
postRouter.patch('/', postControllers.updatePost);
postRouter.get('/', postControllers.getAllPosts);
postRouter.get('/:id', postControllers.getPost);

postRouter.post('/comment/', postControllers.addCommentToPost);
postRouter.patch('/comment/', postControllers.removeCommentFromPost);
postRouter.get('/comment/:postId', postControllers.getComments);

postRouter.post('/like', postControllers.addLikeToPost);
postRouter.patch('/like', postControllers.removeLikeFromPost);
postRouter.get('/like/:postId', postControllers.getLikes);

module.exports = postRouter;
