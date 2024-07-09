
const mongoose = require('mongoose');
const Item = require('../models/itemSchema')



exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

exports.createItem = async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

