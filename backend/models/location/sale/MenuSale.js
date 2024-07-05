// models/MenuVilla.js
const mongoose = require('mongoose');

const MenuSalaSchema = new mongoose.Schema({
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
    ref: 'Ville',
    required: true
  }
});

const MenuVilla = mongoose.model('MenuSala', MenuSalaSchema);

module.exports = MenuVilla;
