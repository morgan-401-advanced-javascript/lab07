'use strict';

const { server } = require('../lib/server.js');
const supertester = require('./supertester.js');
const mockRequest = supertester(server);

describe('web server', () => {
  it('should respond properly on request to /people', () => {
    return mockRequest
      .get('/people')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(4);
      })
      .catch(console.error);
  });

  it('should respond properly on post to /people', () => {
    return mockRequest
      .post('/people')
      .send({ firstName: 'Test', lastName: 'Person' })
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.firstName).toBe('Test');
      })
      .catch(console.error);
  });
  it('should delete a person',()=>{
    return mockRequest
      .delete('/people/1')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.count).toBe(4);

      })
      .catch(console.error);
  });
  it('should update person', ()=>{
    return mockRequest
      .put('/people/1')
      .send({
        firstName: 'Test',      lastName: 'Smalls',
        birthday: new Date('02/13/2020'),
        team: 1,
        likes: 'cats'})
      .then(results => {
        // expect(results.status).toBe(200);
        expect(results.body.firstName).toBe('Test');

      });
  });
});
