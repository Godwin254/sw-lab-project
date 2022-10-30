//post model
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const PostSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    body: {
        type: String,
        required: true

    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
        
    },
    createdAt:{
        type: Date,
        default: () => Date.now().toLocaleString(),
        immutable: true
    },
    updatedAt:{
        type: Date,
        default: () => Date.now().toLocaleString()
    }
});