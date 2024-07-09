const mongoose = require('mongoose');

const CateringGallery = new mongoose.Schema({
  img: {
    type: String,
  },
  idSala: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Caterings',
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('CateringGallery', CateringGallery);
