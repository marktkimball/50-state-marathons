const path = require('path');
const express = require('express');
const expressEnforcesSSL = require('express-enforces-ssl');
const compress = require('compression');
const config = require('./config');

const server = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  server.enable('trust proxy').use(expressEnforcesSSL());
}

server
  .use(compress({ threshold: 0 }))
  .use(config)
  .use('/', express.static(path.join(__dirname, 'dist')))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

server.listen(port, err => {
  if (err) {
    console.error(`Error: ${err}`); // eslint-disable-line no-console
  } else {
    console.info(`Server started listening on http://localhost:${port}`); // eslint-disable-line no-console
  }
});
