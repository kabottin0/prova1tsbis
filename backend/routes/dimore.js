const express = require('express');
const { createDimora, getDimore } = require('../controllers/dimoreController');

const router = express.Router();


router.get('/dimore', getDimore);
router.post('/dimore', createDimora);






module.exports = router;
