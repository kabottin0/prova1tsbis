const mongoose = require('mongoose');


const CateringsSchema = new mongoose.Schema({
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
  description: {
    type: String,
  },
  like: {
    type: Number
  }
}, {
  timestamps: true 
});





module.exports = mongoose.model('Caterings', CateringsSchema);
