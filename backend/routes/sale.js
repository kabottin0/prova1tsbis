const express = require('express');
const { createSala, getSale } = require('../controllers/saleController');

const router = express.Router();


router.get('/sale', getSale);
router.post('/sale', createSala);






module.exports = router;
