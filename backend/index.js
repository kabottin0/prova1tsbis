const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AWS = require('aws-sdk');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const itemsRouter = require("./routes/items")
const usersRouter = require("./routes/users")
const villeRouter = require("./routes/villa")
const saleRouter = require("./routes/sale")
const dimoreRouter = require("./routes/dimore")
const cateringRouter = require("./routes/caterings")
const awsAccessKeyId = process.env.AWS_ACCESS_KEY_ID;
const awsSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


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

const fileSchema = new mongoose.Schema({
  url: String,
  s3Key: String // Aggiungi questo campo per salvare il nome del file su S3
});

const File = mongoose.model('File', fileSchema);

const s3 = new AWS.S3({
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  region: 'eu-central-1'
});


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const s3Key = `${uuidv4()}${path.extname(file.originalname)}`;

  const params = {
    Bucket: 'myherabucket',
    Key: s3Key,
    Body: file.buffer,
    ContentType: file.mimetype
  };
  s3.upload(params, async (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    const fileUrl = data.Location;
    const newFile = new File({ url: fileUrl, s3Key });

    try {
      await newFile.save();
      res.send({ url: fileUrl });
    } catch (error) {
      res.status(500).send(error);
    }
  });
});

app.get('/images', async (req, res) => {
  try {
    const files = await File.find({});
    res.send(files);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get('/image/:id', async (req, res) => {
//   try {
//     const file = await File.findById(req.params.id);
//     if (!file) {
//       return res.status(404).send('File not found');
//     }

//     const params = {
//       Bucket: 'myherabucket',
//       Key: file.s3Key,
//       Expires: 60 // URL valido per 60 secondi
//     };

//     const signedUrl = s3.getSignedUrl('getObject', params);
//     res.send({ url: signedUrl });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
app.get('/image/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      console.error('File not found for ID:', req.params.id); // Log the error
      return res.status(404).send('File not found');
    }

    const params = {
      Bucket: 'myherabucket',
      Key: file.s3Key,
      Expires: 60 // URL valido per 60 secondi
    };

    const signedUrl = s3.getSignedUrl('getObject', params);
    res.send({ url: signedUrl });
  } catch (error) {
    console.error('Error generating signed URL:', error); // Log the error
    res.status(500).send(error);
  }
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
