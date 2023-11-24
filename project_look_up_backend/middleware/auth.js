const config = require("config");
const jwt = require('jsonwebtoken');
const { User } = require('../models/Users');

module.exports = async (req, res, next) => {
  const token = req.headers['x-auth-token'];

  if (!token)
    return res
      .status(401)
      .json({ message: 'Access deined. No token provided.' });

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    const user = await User.findById(decoded._id);
    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
