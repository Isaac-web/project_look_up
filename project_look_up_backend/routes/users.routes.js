const express = require('express');
const { authenticate } = require('../controllers/users.controllers');

const router = express.Router();

router.post('/authenticate', authenticate);

module.exports = router;
