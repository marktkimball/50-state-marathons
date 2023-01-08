require('dotenv').config();

const config = {
  FIRESTORE_API_KEY: process.env.API_KEY,
  MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
  APP_ID: process.env.APP_ID,
};

const middleware = (req, res, next) => {
  res.cookie('config', JSON.stringify(config));
  next();
};

module.exports = middleware;
