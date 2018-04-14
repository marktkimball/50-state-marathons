require('dotenv').config();

const config = {
  FIREBASE_CONFIG: process.env.FIREBASE_CONFIG,
};

const middleware = (req, res, next) => {
  res.cookie('config', JSON.stringify(config));
  next();
};

module.exports = middleware;
