const mongoose = require('mongoose');

const SalaGallery = new mongoose.Schema({
  img: {
    type: String,
  },
  idSala: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sale',
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('SalaGallery', SalaGallery);
