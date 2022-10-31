
const User = require('../model/User');

//get all users from db
const getAllUsers = async () => {
    try{
        const users = await User.find();
        return users;
    }catch(err){
        console.log(err);
    }
}

//get user by id from db
const getOneUser = async (userId) => {
    try{
        const user = await User.findById(userId);
        return user;
    }catch(err){
        console.log(err);
    }
}

//create new user
const createUser = async (newUser) => {
    try{
        const user = await User.create(newUser);
        user.save();
        return user;
    }catch(err){
        console.log(err);
    }

}

//update user by id
const updateUser = async (userId, updatedUser) => {
    try{
        const user = await User.findByIdAndUpdate(userId, updatedUser, {new: true});
        return user;
    }catch(err){
        console.log(err);
    }
}

//delete user by id
const deleteUser = async (userId) => {
    try{
        const user = await User.findByIdAndDelete(userId);
        return user;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}