//post model
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const PostSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: false
    },
    body: {
        type: String,
        required: true

    },
    author: {
        type: String,
        required: true
        
    },
    createdAt:{
        type: Date,
        default: () => new Date().toString(),
        immutable: true
    },
    updatedAt:{
        type: Date,
        default: () => new Date().toString(),
    }
});


module.exports = Post = mongoose.model('post', PostSchema);