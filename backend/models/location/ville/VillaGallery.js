const mongoose = require('mongoose');

const VillaGallery = new mongoose.Schema({
  img: {
    type: String,
  },
  idVilla: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ville',
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('VillaGallery', VillaGallery);
