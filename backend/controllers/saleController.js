const mongoose = require('mongoose');
const SaleSchema = require('../models/location/sale/SaleSchema');



exports.getSale = async (req, res) => {
    try {
        const sale = await SaleSchema.find();
        res.status(200).json(sale);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching sale', error });
    }
};

exports.createSala = async (req, res) => {
    try {
        const sala = new SaleSchema(req.body);  
        await sala.save();
        res.status(201).json(sala);
    } catch (error) {
        res.status(400).json({ message: 'Error creating sala', error });
    }
};
