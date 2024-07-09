const mongoose = require('mongoose');

const DimoraGallery = new mongoose.Schema({
  img: {
    type: String,
  },
  idSala: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dimore',
    required: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('DimoraGallery', DimoraGallery);
