'use strict';

const express = require('express');
let db = require('../lib/db.js');

let router = express.Router();

router.get('/', (req, res, next) => {
  let count = db.teams.length;
  let results = db.teams;
  res.json({ count, results });
});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.teams.filter(record => record.id === parseInt(id));
  res.json(record[0]);
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.teams.filter(record => record.id === parseInt(id));
  let index = db.teams.indexOf(record);
  let results = db.teams;
  results.slice(index);
  let count = db.teams.length;
  res.json({ count, results });
    
});

module.exports = router;