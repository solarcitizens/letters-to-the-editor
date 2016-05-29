'use strict';

const emailService = require('../../src/services/emailService');
const integrationTestHelpers = require('./integrationTestHelpers');
const sinon = require('sinon');
const config = require('config');

const nodemailer = require('nodemailer');

describe('sending emails', () => {
  let transportStub;
  let sendMailSpy;
  let configStub;

  beforeEach(() => {
    transportStub = {
      sendMail: (options, callback) => {
        callback(false, true);
      }
    };
    sendMailSpy = sinon.spy(transportStub, 'sendMail');
    sinon.stub(nodemailer, 'createTransport').returns(transportStub);
    configStub = sinon.stub(config, 'get');
    configStub.withArgs('email.sendEmails').returns(true);
  });

  afterEach(() => {
    nodemailer.createTransport.restore();
    config.get.restore();
  });

  describe('happy', () => {
    it('sends an email to the editor', () => {
      console.log = () => {};
      emailService.sendEmail(integrationTestHelpers.makeLetter());
      sinon.assert.calledOnce(sendMailSpy);
    });

    it('does not send an email if disabled in configuration', () => {
      configStub.withArgs('email.sendEmails').returns(false);
      emailService.sendEmail(integrationTestHelpers.makeLetter());
      sinon.assert.notCalled(sendMailSpy);
    });
  });

  describe('sad', () => {
    beforeEach(() => {
      transportStub = { sendMail: function(options, callback) { callback(true,false); }};
      sendMailSpy = sinon.spy(transportStub, 'sendMail');
      sinon.stub(nodemailer, 'createTransport').returns(transportStub);
    });

    xit('throws an error when something unexpected happens', (done) => {
      emailService.sendEmail(integrationTestHelpers.makeLetter());

    });
  });
});
