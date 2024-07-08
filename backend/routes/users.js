const express = require('express');
const { createUser, getUsers } = require('../controllers/usersController');
const router = express.Router();


router.get('/users', getUsers);
router.post('/users', createUser);






module.exports = router;
