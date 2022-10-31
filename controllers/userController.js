const userServices = require('../services/userService');


const getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers();
        res.status(200).json(users);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const user = await userServices.getOneUser(userId);
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const user = await userServices.createUser(newUser);
        res.status(201).json(user);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const updatedUser = req.body;

        const user = await userServices.updateUser(userId, updatedUser);
        res.status(200).json(user);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const {userId} = req.params;
        const user = await userServices.deleteUser(userId);
        res.status(200).json({ message: 'deleted successfully' });
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}