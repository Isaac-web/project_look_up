const mongoose = require('mongoose');
const Joi = require('joi');

const flightSchema = new mongoose.Schema({
  origin: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  destination: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  time: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  airplane: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  adultSeatCost: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  childrenSeatCost: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  babiesSeatCost: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
  trolleyCost: {
    type: String,
    maxlength: 256,
    required: true,
    trim: true,
  },
});

const Flight = mongoose.model('Flight', flightSchema);

const validate = (flight) => {
  const schema = Joi.object({
    origin: Joi.string().max(256).required().label('Origin'),
    destination: Joi.string().max(256).required().label('Destination'),
    time: Joi.string().max(256).required().label('Time'),
    airplane: Joi.string().max(64).required().label('Airplane'),
    adultSeatCost: Joi.string().max(16).required().label('Adult Seat Cost'),
    childrenSeatCost: Joi.string()
      .max(16)
      .required()
      .label('Children Seat Cost'),
    babiesSeatCost: Joi.string().max(16).required().label('Baby Seat Cost'),
    trolleyCost: Joi.string().max(16).required().label('Trolley Cost'),
  });

  return schema.validate(flight);
};

module.exports.validate = validate;
module.exports.Flight = Flight;
