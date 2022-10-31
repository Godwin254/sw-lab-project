const postService = require('../services/postService');

const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json(posts);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOnePost = async (req, res) => {
    try {
        const {postId} = req.params;
        const post = await postService.getOnePost(postId);
        res.status(200).json(post);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        const post = await postService.createPost(newPost);
        res.status(201).json(post);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updatePost = async (req, res) => {
    try {
        const {postId} = req.params;
        const updatedPost = req.body;

        const post = await postService.updatePost(postId, updatedPost);
        res.status(200).json(post);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deletePost = async (req, res) => {
    try {
        const {postId} = req.params;
        const post = await postService.deletePost(postId);
        res.status(200).json({message: 'deleted successfully'});
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}


module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost
}