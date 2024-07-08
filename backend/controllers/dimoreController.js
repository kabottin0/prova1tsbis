const mongoose = require('mongoose');
const dimoreSchema = require("../models/location/dimore/DimoreSchema")


exports.getDimore = async (req, res) => {
    try {
        const dimore = await dimoreSchema.find();
        res.status(200).json(dimore);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching dimore', error });
    }
};

exports.createDimora = async (req, res) => {
    try {
        const dimora = new dimoreSchema(req.body);  
        await dimora.save();
        res.status(201).json(dimora);
    } catch (error) {
        res.status(400).json({ message: 'Error creating dimora', error });
    }
};
