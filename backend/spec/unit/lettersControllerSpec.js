'use strict';

const testHelpers = require('../testHelpers');
const chai = require('chai');
const Q = require('q');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(require('sinon-chai'));

const publicationService = require('../../src/services/publicationService');
const letterService = require('../../src/services/letterService');
const emailService = require('../../src/services/emailService');

const lettersController = require('../../src/controllers/lettersController');

describe('letters controller', () => {
  let res;
  let req;

  beforeEach(() => {
    res = {
      sendStatus: sinon.spy()
    };

    req = {
      body: testHelpers.makeLetter(),
    };

    sinon.stub(letterService, 'createLetter').returns(Q.resolve(testHelpers.makeLetter()));
    sinon.stub(publicationService, 'findByNameAndPostCode').returns([
      {'title': 'New York Post', 'email': 'email@do.com'},
      {'title': 'New York Times', 'email': 'correo@es.com'}]);
  });

  afterEach(() => {
    letterService.createLetter.restore();
    publicationService.findByNameAndPostCode.restore();
  });

  it('should send separate emails per publication selected', (done) => {
    sinon.spy(emailService, 'sendToEditor');

    lettersController.send(req, res)
    .then(() => {
      expect(emailService.sendToEditor).to.have.been.calledTwice;
    })
    .then(done)
    .catch(done);
  });

  it('should respond 200 when it sends all the emails successfully');

  it('should respond 206 when one of the emails fails');
});


