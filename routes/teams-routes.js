'use strict';

const express = require('express');
let db = require('../lib/db.js');

let router = express.Router();

router.get('/', (req, res, next) => {
  let count = db.teams.length;
  let results = db.teams;
  res.json({ count, results });
});