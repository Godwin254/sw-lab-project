const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);
router.get('/:postId', postController.getOnePost);
router.post('/create', postController.createPost);
router.patch('/update/:postId', postController.updatePost);
router.delete('/delete/:postId', postController.deletePost);

module.exports = router;