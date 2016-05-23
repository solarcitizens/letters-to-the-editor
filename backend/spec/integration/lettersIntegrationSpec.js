'use strict';

const integrationTestHelpers = require('./integrationTestHelpers');
const app = require('../../src/app.js');

describe('Register', () => {
  let agent;
  let request = require('supertest-as-promised');

  let hasNewLetter = (res) => {
    if ('Donald' !== res.body.firstName) {
        console.log(res.body);
        throw new Error('missing created letter');
    }
  };

  beforeEach(() => {
    agent = request.agent(app);
  });

  it('should return 200 and a created member when the input is valid', () => {
    return agent
    .post('/letters')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(integrationTestHelpers.makeLetter())
    .expect(200)
    .expect(hasNewLetter);
  });

  it('should safely create a letter with dodgy information', () => {
    let dodgyLetter = integrationTestHelpers.makeLetter();
    dodgyLetter.address = '\'); DROP TABLE LETTERS';

    return agent
    .post('/letters')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(dodgyLetter)
    .expect(200)
    .expect(hasNewLetter);
  });

  it('should return 400 if the input is incomplete', () => {
    console.error = () => {};
    return agent
    .post('/letters')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(integrationTestHelpers.makeInvalidLetter())
    .expect(400);
  });
});
