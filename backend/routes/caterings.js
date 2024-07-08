const express = require('express');
const { getCaterings, createCatering } = require('../controllers/cateringController');

const router = express.Router();


router.get('/catering', getCaterings);
router.post('/catering', createCatering);






module.exports = router;
