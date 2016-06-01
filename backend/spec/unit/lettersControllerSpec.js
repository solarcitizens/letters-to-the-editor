'use strict';

const testHelpers = require('../testHelpers');
const chai = require('chai');
const Q = require('q');
const expect = chai.expect;
const sinon = require('sinon');
const match = sinon.match;
chai.use(require('sinon-chai'));

const publicationService = require('../../src/services/publicationService');
const letterService = require('../../src/services/letterService');
const emailService = require('../../src/services/emailService');

const lettersController = require('../../src/controllers/lettersController');

const letter = testHelpers.makeLetter();
letter.publications.push('El Espectador');

describe('letters controller', () => {
  let res;
  let req;

  beforeEach(() => {
    res = { status: sinon.stub().returns({ send: sinon.spy()}), sendStatus: sinon.spy()};

    req = {
      body: letter,
    };

    sinon.stub(letterService, 'createLetter').returns(Q.resolve());

    sinon.stub(publicationService, 'findByNameAndPostCode').returns([
      {'title': 'New York Post', 'email': 'email@do.com'},
      {'title': 'New York Times', 'email': 'correo@es.com'},
      {'title': 'El Espectador', 'email': 'editor@co.com'}]);
  });

  afterEach(() => {
    letterService.createLetter.restore();
    publicationService.findByNameAndPostCode.restore();
    emailService.sendToEditor.restore();
  });

  it('should send separate emails per publication selected', (done) => {
    sinon.spy(emailService, 'sendToEditor');

    lettersController.send(req, res)
    .then(() => {
      expect(emailService.sendToEditor).to.have.been.calledThrice;
    })
    .then(done)
    .catch(done);
  });

  it('should respond 200 when it sends all the emails successfully', (done) => {
    sinon.stub(emailService, 'sendToEditor').returns(Q.resolve());

    lettersController.send(req, res)
    .then(() => {
      expect(res.sendStatus).to.have.been.calledWith(201);
    })
    .then(done)
    .catch(done);
  });

  it('should respond 206 when one of the emails fails', (done) => {
    let sendEmailStub = sinon.stub(emailService, 'sendToEditor');
    sendEmailStub.withArgs(match.any, match.has('email', 'email@do.com')).returns(Q.resolve());
    sendEmailStub.withArgs(match.any, match.has('email', 'correo@es.com')).returns(Q.reject());
    sendEmailStub.withArgs(match.any, match.has('email', 'editor@co.com')).returns(Q.reject());



    lettersController.send(req, res)
    .then(() => {
      expect(res.status).to.have.been.calledWith(206);
      expect(res.status().send).to.have.been.calledWith(['New York Times', 'El Espectador']);
    })
    .then(done)
    .catch(done);
  });

  it('should fail when all of the emails fail', (done) => {
    sinon.stub(emailService, 'sendToEditor').returns(Q.reject());

    lettersController.send(req, res)
    .then(() => {
      expect(res.status).to.have.been.calledWith(400);
    })
    .then(done)
    .catch(done);
  });
});


