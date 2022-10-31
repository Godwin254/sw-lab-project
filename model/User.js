//user model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
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
        default: () => new Date().toString()
    }
});

module.exports = User = mongoose.model('user', UserSchema);