require('dotenv').config();

const config = {
  FIRESTORE_API_KEY: process.env.FIRESTORE_API_KEY,
  FIRESTORE_AUTH_DOMAIN: process.env.FIRESTORE_AUTH_DOMAIN,
  FIRESTORE_PROJECT_ID: process.env.FIRESTORE_PROJECT_ID,
  FIRESTORE_STORAGE_BUCKET: process.env.FIRESTORE_STORAGE_BUCKET,
};

const middleware = (req, res, next) => {
  res.cookie('config', JSON.stringify(config));
  next();
};

module.exports = middleware;
