// models/MenuVilla.js
const mongoose = require('mongoose');

const MenuCateringSchema = new mongoose.Schema({
   antipasti: [
    {
      nome: {
        type: String,
        required: true
      },
      galleriaImmagini: [String] // Array di URL delle immagini
    }
  ],
  primi: [
    {
      nome: {
        type: String,
        required: true
      },
      galleriaImmagini: [String] // Array di URL delle immagini
    }
  ],
  secondi: [
    {
      nome: {
        type: String,
        required: true
      }
    }
  ],
  dessert: [
    {
      nome: {
        type: String,
        required: true
      }
    }
  ],
  idVilla: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Caterings',
    required: true
  }
});

const MenuVilla = mongoose.model('MenuCatering', MenuCateringSchema);

module.exports = MenuVilla;
