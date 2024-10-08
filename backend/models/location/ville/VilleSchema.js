const mongoose = require('mongoose');

const Ville = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  vatNumber: {
    type: String,
    required: true
  },
  imgCover: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  longDescription: {
    type: String,
  },
  like: {
    type: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Ville', Ville);
