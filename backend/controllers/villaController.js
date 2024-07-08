const mongoose = require('mongoose');
const Ville = require('../models/location/ville/VilleSchema');



exports.getVille = async (req, res) => {
  try {
    const ville = await Ville.find();
    res.status(200).json(ville);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};


exports.createVille = async (req, res) => {
  try {
    const villa = new Ville(req.body);
    await villa.save();
    res.status(201).json(villa);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};


