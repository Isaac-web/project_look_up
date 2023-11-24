const _ = require('lodash');
const { Flight, validate } = require('../models/Flight');

const createFlight = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const alreadyExists = await Flight.findOne({ airplane: req.body.airplane });

  if (alreadyExists)
    return res.status(409).json({ message: 'Flight already exists' });

  const flight = await Flight.create(
    _.pick(req.body, [
      'origin',
      'destination',
      'time',
      'airplane',
      'adultSeatCost',
      'childrenSeatCost',
      'babiesSeatCost',
      'trolleyCost',
    ])
  );

  res.status(201).send({ message: 'Flight Created', flight });
};

const fetchFlights = async (req, res) => {
  const flights = await Flight.find({});

  res.send({ message: 'Flights fetched', flights });
};

module.exports.fetchFlights = fetchFlights;
module.exports.createFlight = createFlight;
