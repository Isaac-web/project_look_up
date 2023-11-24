const express = require('express');
const {
  createFlight,
  fetchFlights,
} = require('../controllers/flights.controllers');

const router = express.Router();

router.post('/', createFlight);
router.get('/', fetchFlights);

module.exports = router;
