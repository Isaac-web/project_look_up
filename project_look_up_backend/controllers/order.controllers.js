const _ = require('lodash');
const { Order, validate } = require('../models/Order');

const createOrder = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const order = new Order(
    _.pick(req.body, [
      'origin',
      'destination',
      'departureTime',
      'flightId',
      'numberOrPassengers',
      'selectedSeats',
      'luggage',
      'total',
    ])
  );
  order.userId = req.user._id;

  await order.save();

  res.json({ message: 'You order was placed.', data: order });
};

const fetchOrders = async (req, res) => {
  const orders = await Order.find({});

  res.json({ message: 'Orders fetched', data: orders });
};

module.exports.createOrder = createOrder;
module.exports.fetchOrders = fetchOrders;
