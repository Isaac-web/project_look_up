const mongoose = require('mongoose');
const Joi = require('joi');

const Order = mongoose.model(
  'Order',
  new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    origin: {
      type: String,
      trim: true,
      required: true,
      maxlength: 256,
    },
    destination: {
      type: String,
      trim: true,
      required: true,
      maxlength: 256,
    },
    departureTime: {
      type: String,
      trim: true,
      required: true,
      maxlength: 256,
    },
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Flight',
    },
    numberOfPassengers: {
      type: Number,
      min: 1,
    },
    chosenSeats: {
      type: [String],
      validate: {
        validator: function (seats) {
          return !seats || !Array.isArray(seats) || !seats.length;
        },
        message:
          'Chosen Seats must be an array of strings and should have at least one element',
      },
      required: true,
      luggage: {
        type: String,
        trim: true,
        required: true,
        maxlength: 256,
      },
      total: {
        type: Number,
        required: true,
        validate: {
          validator: function (total) {
            return !Boolean(total > 0);
          },
          message: 'total should be greater than 0',
        },
      },
    },
  })
);

const validate = (order) => {
  const schema = Joi.object({
    origin: Joi.string().required().max(256).label('Origin'),
    destination: Joi.string().required().max(256).label('Destination'),
    departureTime: Joi.string().required().max(256).label('Depature Time'),
    flightId: Joi.string().required().label('Flight Id'),
    numberOfPassengers: Joi.number().required().label('Number Of Passengers'),
    chosenSeats: Joi.array()
      .min(1)
      .items(Joi.string())
      .required()
      .label('Chosen Seats'),
    luggage: Joi.string().max(256).required().label('Luggage'),
    total: Joi.number().greater(0).required(),
  });

  return schema.validate(order);
};

module.exports.validate = validate;
module.exports.Order = Order;
