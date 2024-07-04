const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://PeppeTest:xnY5QmDMY1oj3GVu@progettouno.f2k7aho.mongodb.net/?retryWrites=true&w=majority&appName=progettoUno', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// const Schema = mongoose.Schema;

// const itemSchema = new Schema({
//   name: { type: String, required: true },
// });

const Item = mongoose.model('Item', itemSchema);

app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// app.post('/items', async (req, res) => {
//   const newItem = new Item(req.body);
//   await newItem.save();
//   res.status(201).json(newItem);
// });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
