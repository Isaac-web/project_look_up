const _ = require('lodash');
const config = require('config');
const jwt = require('jsonwebtoken');
const { User, validate } = require('../models/Users');

const authenticate = async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  let user;
  user = await User.findOne({ login: req.body.login });
  if (!user) {
    user = new User(_.pick(req.body, ['login', 'password']));
    await user.save();
  }

  if (user.password !== req.body.password)
    return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { _id: user._id, login: user.login },
    config.get('jwtSecret')
  );

  user.password = undefined;
  res.json({ message: 'You are logged in', token, user });
};

module.exports.authenticate = authenticate;
