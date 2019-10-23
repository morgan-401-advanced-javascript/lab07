'use strict';

const express = require('express');
let db = require('../lib/db.js');

let router = express.Router();

// Route to Get all People
/**
 * @param  {} '/people'
 * @param  {} (req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{letcount=db.people.length;letresults=db.people;res.json({count
 * @param  {} results}
 * @param  {} ;}
 */
router.get('/', (req, res, next) => {
  let count = db.people.length;
  let results = db.people;
  res.json({ count, results });
});
  
// Route to Get a person
/**
   * @param  {id'} '/people/
   * @param  {} (req
   * @param  {} res
   * @param  {} next
   * @param  {} =>{letid=req.params.id;letrecord=db.people.filter(record=>record.id===parseInt(id
   * @param  {} ;res.json(record[0]
   * @param  {} ;}
   */
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.people.filter(record => record.id === parseInt(id));
  res.json(record[0]);
});
  
// Route to Create a person
/**
   * @param  {} '/people'
   * @param  {} (req
   * @param  {} res
   * @param  {} next
   * @param  {} =>{letrecord=req.body;record.id=Math.random(
   * @param  {} ;db.people.push(record
   * @param  {} ;res.json(record
   * @param  {} ;}
   */
router.post('/', (req, res, next) => {
  let record = req.body;
  record.id = Math.random();
  db.people.push(record);
  res.json(record);
});
  
// Route to Update a person
router.put('/:id', (req, res, next) => {
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
  
//  TESTING DELETE
// app.get('/delete/:id', req, res, next) =>{
//   res.send('')
// }
router.delete('/:id', (req, res, next) => {
  let id = req.params.id;
  // filter list to exclude deleted person
  let deletedPersonList = db.people.filter(person => person.id != id);
  db.people = deletedPersonList;
  let results = db.people;
  let count = db.people.length;
  res.json({ count, results });
  
});
  
module.exports = router;