'use strict';

const express = require('express');
const app = express();
const people = require('../routes/people-routes.js');
const teams = require('../routes/teams-routes.js');
let db = require('./db.js');

app.use(express.json());

// Default Route
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
