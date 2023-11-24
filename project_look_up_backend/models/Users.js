const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model(
  'User',
  new mongoose.Schema({
    login: {
      type: String,
      maxlength: 256,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      maxlength: 256,
      required: true,
    },
  })
);

const validate = (user) => {
  const schema = Joi.object({
    login: Joi.string().max(256).required().label('Login'),
    password: Joi.string().max(256).required().label('Password'),
  });

  return schema.validate(user);
};

module.exports.validate = validate;
module.exports.User = User;
