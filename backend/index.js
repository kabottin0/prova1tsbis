const express = require('express');

const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// Middleware per il parsing delle richieste JSON
app.use(express.json());

// Connessione a MongoDB
// mongoose.connect('mongodb+srv://PeppeTest:xnY5QmDMY1oj3GVu@progettouno.f2k7aho.mongodb.net/?retryWrites=true&w=majority&appName=progettoUno', { useNewUrlParser: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('Connessione al database MongoDB stabilita con successo');
// });


// Route di esempio
// app.get('/items', async (req, res) => {
//     try {
//     const items = await itemSchema.find()
//     //   const items = await Item.find();
//       res.json(items);
//     } catch (err) {
//       res.status(500).send('Errore nel recupero degli elementi');
//     }
//   });

app.get("/", (req, res) => {
  res.send("hello world")
})
// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
