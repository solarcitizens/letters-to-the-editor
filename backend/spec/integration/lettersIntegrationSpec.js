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

  xit('should safely create a member with dodgy information', (done) => {
    getBranchId(agent)
    .then((branchId) => {
      let dodgyMember = integrationTestHelpers.makeMember(branchId);
      dodgyMember.additionalInfo = '\'); DROP TABLE MEMBERS';

      return agent
      .post('/register')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(dodgyMember)
      .expect(200)
      .expect(hasNewMember);
    }).then(done, done.fail);
  });

  xit('should return 200 when creating a member with no address', (done) => {
    getBranchId(agent)
    .then((branchId) => {
      return agent
      .post('/register')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(makeMemberWithNoAddress(branchId))
      .expect(200)
      .expect(hasNewMember);
    }).then(done, done.fail);
  });

  xit('should return 400 if the input is null', (done) => {
    return agent
    .post('/register')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(null)
    .expect(400)
    .then(done, done.fail);
  });

  xit('should return 400 if the input is incomplete', (done) => {
    return agent
    .post('/register')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .send(makeInvalidMember())
    .expect(400)
    .then(done, done.fail);
  });
});
