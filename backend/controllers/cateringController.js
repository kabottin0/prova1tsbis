const mongoose = require('mongoose');
const cateringSchema = require("../models/location/caterings/CateringsSchema")



exports.getCaterings = async (req, res) => {
    try {
        const caterings = await cateringSchema.find();
        res.status(200).json(caterings);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching caterings', error });
    }
};

exports.createCatering = async (req, res) => {
    try {
        const catering = new cateringSchema(req.body);  
        await catering.save();
        res.status(201).json(catering);
    } catch (error) {
        res.status(400).json({ message: 'Error creating catering', error });
    }
};
