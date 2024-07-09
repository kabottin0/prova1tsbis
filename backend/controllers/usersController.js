const mongoose = require('mongoose');
const Users = require('../models/Users')



exports.getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = new Users(req.body);  
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};
