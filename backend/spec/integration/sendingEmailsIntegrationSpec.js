'use strict';

const emailService = require('../../src/services/emailService');
const integrationTestHelpers = require('./integrationTestHelpers');
const sinon = require('sinon');
const config = require('config');

const nodemailer = require('nodemailer');

describe('sending emails', () => {
  let transportStub;
  let sendMailSpy;

  beforeEach(() => {
    transportStub = {
      sendMail: (options, callback) => {
        callback(false, true);
      }
    };
    sendMailSpy = sinon.spy(transportStub, 'sendMail');
    sinon.stub(nodemailer, 'createTransport').returns(transportStub);

  });

  afterEach(() => {
    nodemailer.createTransport.restore();
  });

  describe('happy', () => {
    it('sends an email to the editor', () => {
      emailService.sendEmail(integrationTestHelpers.makeLetter());
      sinon.assert.calledOnce(sendMailSpy);
    });

    xit('does not send an email if disabled in configuration', () => {
    });
  });

  describe('sad', () => {
    beforeEach(() => {
      transportStub = {
        sendMail: (options, callback) => {
          callback(true, false);
        }
      };
      sendMailSpy = sinon.spy(transportStub, 'sendMail');
      sinon.stub(nodemailer, 'createTransport').returns(transportStub);
    });

    xit('throws an error when something unexpected happens', (done) => {
    });
  });
});
