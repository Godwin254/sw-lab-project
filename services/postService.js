const Post = require('../model/Post');

//get all posts from db
const getAllPosts = async () => {
    try{
        const posts = await Post.find();
        return posts;
    }catch(err){
        console.log(err);
    }
}

//get post by id from db
const getOnePost = async (postId) => {
    try{
        const post = await Post.findById(postId);
        return post;
    }catch(err){
        console.log(err);
    }
}

//create new post
const createPost = async (newPost) => {
    try{
        const post = await Post.create(newPost);
        post.save();
        return post;
    }catch(err){
        console.log(err);
    }

}

//update post by id
const updatePost = async (postId, updatedPost) => {
    try{
        const post = await Post.findByIdAndUpdate(postId, updatedPost, {new: true});
        return post;
    }catch(err){
        console.log(err);
    }
}

//delete post by id
const deletePost = async (postId) => {
    try{
        const post = await Post.findByIdAndDelete(postId);
        return post;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    updatePost,
    deletePost
}