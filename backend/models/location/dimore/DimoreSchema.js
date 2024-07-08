const mongoose = require('mongoose');


const Dimore = new mongoose.Schema({
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
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  vatNumber: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
});





module.exports = mongoose.model('Dimore', Dimore);
