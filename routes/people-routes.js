'use strict';

const express = require('express');
let db = require('../lib/db.js');
const logger = require('../logger.js');


let router = express.Router();

// Route to Get all People
/**
 * Get a list of all people in database
 * @group People
 * @route GET '/people'
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/', (req, res, next) => {
  req.message = 'Got Peeps!';
  next();},
logger, (req, res, next)=>{
  let count = db.people.length;
  let results = db.people;
  req.str = 'TEST';
  res.json({ count, results });
});
  
/**
 * Route to request a specific person
 * @group People 
 * @route GET '/people/:id'
 * @param {integer}  - people id
 * @security basicAuth
 * @returns {object} 200 { record: {id: number, firstName: string, lastName: string, birthday: Date, team: number, likes: string }}
 * @returns {Error}  500 - Server error
 */
router.get('/:id', (req, res, next) => {
  req.message = 'Got a person!';
  next();},
logger, (req, res, next)=>{
  let id = req.params.id;
  let record = db.people.filter(record => record.id === parseInt(id));
  res.json(record[0]);
});
  
// Route to Create a person
/**
 * Route to create a person
 * @group People 
 * @route POST '/people'
 * @security basicAuth
 * @returns {object} 200 { record: {id: number, firstName: string, lastName: string, birthday: Date, team: number, likes: string }}
 * @returns {Error}  500 - Server error
 */
router.post('/', (req, res, next) => {
  req.message = 'Made a person!';
  next();},
logger, (req, res, next)=>{
  let record = req.body;
  record.id = Math.random();
  db.people.push(record);
  res.json(record);
});
  
// Route to Update a person
/**
 * Route to update a specific person
 * @group People 
 * @route PUT '/people/:id'
 * @param {integer}  - people id
 * @security basicAuth
 * @returns {object} 200 { record: {id: number, firstName: string, lastName: string, birthday: Date, team: number, likes: string }}
 * @returns {Error}  500 - Server error
 */
router.put('/:id', (req, res, next) => {
  req.message = 'updated a person';
  next();},
logger, (req, res, next)=>{
  let id = req.params.id;
  let updatedPerson = req.body;
  let updatedDb = [];
  // loop to replace old data with new data
  db.people.forEach(person => {
    if (person.id === id) {
      updatedDb.push(updatedPerson);
    } else {
      updatedDb.push(person);
    }
  });
  db.people = updatedDb;
  let record = db.people.filter(record => record.id === parseInt(id));
  
  
  
  res.json(db.people.id[0]);
});
  
// Route to Delete a person
  
/**
 * Route to request a specific person
 * @group People 
 * @route DELETE '/people/:id'
 * @param {integer}  - people id
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.delete('/:id', (req, res, next) => {
  req.message = 'Forgot a person';
  next();},
logger, (req, res, next)=>{
  let id = req.params.id;
  // filter list to exclude deleted person
  let deletedPersonList = db.people.filter(person => person.id != id);
  db.people = deletedPersonList;
  let results = db.people;
  let count = db.people.length;
  res.json({ count, results });
  
});
  
module.exports = router;