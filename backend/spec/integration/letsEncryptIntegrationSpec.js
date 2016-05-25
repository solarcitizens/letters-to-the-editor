'use strict';

const integrationTestHelpers = require('./integrationTestHelpers');
const app = require('../../src/app.js');

describe('LetsEncrypt ACME verification', () => {
  let request = require('supertest-as-promised');
  let agent;
  let token = 'jkshd';
  let key = 'keykey';

  beforeEach(() => {
    agent = request.agent(app);
    process.env['ACME_TOKEN'] = token;
    process.env['ACME_KEY'] = key;
  });

  it('should return acme key when the token is valid', () => {
    return agent
      .get('/.well-known/acme-challenge/' + token)
      .send()
      .expect(200, key);
  });

  it('should return 400 when the token is invalid', () => {
    return agent
      .get('/.well-known/acme-challenge/invalidToken')
      .send()
      .expect(400);
  });

});
