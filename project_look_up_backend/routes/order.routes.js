const express = require('express');
const {
  createOrder,
  fetchOrders,
} = require('../controllers/order.controllers');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', [auth], createOrder);
router.get('/', fetchOrders);

module.exports = router;
