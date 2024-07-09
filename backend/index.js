const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemsRouter = require("./routes/items")
const usersRouter = require("./routes/users")
const villeRouter = require("./routes/villa")
const saleRouter = require("./routes/sale")
const dimoreRouter = require("./routes/dimore")
const cateringRouter = require("./routes/caterings")


const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
// Middleware per il parsing delle richieste JSON
app.use(express.json());

// Connessione a MongoDB
mongoose.connect('mongodb+srv://PeppeTest:xnY5QmDMY1oj3GVu@progettouno.f2k7aho.mongodb.net/?retryWrites=true&w=majority&appName=progettoUno', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connessione al database MongoDB stabilita con successo');
});

app.use("/", itemsRouter)
app.use("/", usersRouter)
app.use("/", villeRouter)
app.use("/", saleRouter)
app.use("/", dimoreRouter)
app.use("/", cateringRouter)





// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
