const config = require('config');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const flightsRoute = require('./routes/flights.routes');
const userssRoute = require('./routes/users.routes');
const ordersRoute = require('./routes/order.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/flights', flightsRoute);
app.use('/api/users', userssRoute);
app.use('/api/orders', ordersRoute);

const port = process.env.PORT || config.get('port');
mongoose.set('strictQuery', true);
mongoose
  .connect('mongodb://127.0.0.1/look_up')
  .then(() => {
    app.listen(port, () => console.info(`Listening on port ${port}...`));
  })
  .catch((err) => console.log('Something went wrong.'));

module.exports = app;
