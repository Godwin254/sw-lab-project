const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getOnePost);
router.post('/', postController.createPost);
router.patch('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);

module.exports = router;