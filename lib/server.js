'use strict';

const express = require('express');
const app = express();
const people = require('../routes/people-routes.js');
const teams = require('../routes/teams-routes.js');
const logger = require('../logger.js');

app.use(express.json());
app.use(logger);

// Default Route
/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @group TEST
 * @route GET /api/v1/{model}
 * @param {model} model.path - Model Name
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
app.get('/', (req, res, next) => {
  res.send('Homepage');
});

app.use('/people', people);
app.use('/teams', teams);

const start = port => {
  let PORT = port || process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
};

module.exports = {
  server: app,
  start: start,
};
