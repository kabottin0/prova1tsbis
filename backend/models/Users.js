const mongoose = require('mongoose');


const Users = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  weddinDate: {
    type: Date,
    required: false
  },
  role: {
    type: String,
  },
 }, {
  timestamps: true 
});

module.exports = mongoose.model('User', Users);