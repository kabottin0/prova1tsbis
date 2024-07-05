const express = require('express');
const { createVille, getVille } = require('../controllers/villaController');

const router = express.Router();


router.get('/ville', getVille);
router.post('/ville', createVille);






module.exports = router;
