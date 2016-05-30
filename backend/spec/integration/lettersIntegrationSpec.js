'use strict';

const testHelpers = require('../testHelpers');
const app = require('../../src/app.js');

describe('Letters', () => {
  let agent;
  let request = require('supertest-as-promised');

  beforeEach(() => {
    agent = request.agent(app);
  });

  it('should return 201 when the input is valid', () => {
    return agent
      .post('/letters')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(testHelpers.makeLetter())
      .expect(201);
  });

  it('should safely create a letter with dodgy information', () => {
    let dodgyLetter = testHelpers.makeLetter();
    dodgyLetter.address = '\'); DROP TABLE LETTERS';

    return agent
      .post('/letters')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(dodgyLetter)
      .expect(201);
  });

  it('should return 400 if the input is incomplete', () => {
    console.error = () => {};
    return agent
      .post('/letters')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(testHelpers.makeInvalidLetter())
      .expect(400);
  });
});
