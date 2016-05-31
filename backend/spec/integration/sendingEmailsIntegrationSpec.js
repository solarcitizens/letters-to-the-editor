'use strict';

const emailService = require('../../src/services/emailService');
const testHelpers = require('../testHelpers');
const sinon = require('sinon');
const config = require('config');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('sinon-chai'));

const nodemailer = require('nodemailer');

describe('sending emails', () => {
  let transportStub;
  let sendMailSpy;
  let configStub;

  beforeEach(() => {
    configStub = sinon.stub(config, 'get');
    configStub.withArgs('email.sendEmails').returns(true);
    configStub.withArgs('email.domain').returns('done.on.friday.com');
  });

  afterEach(() => {
    nodemailer.createTransport.restore();
    config.get.restore();
  });

  describe('happy', () => {
    beforeEach(() => {
      transportStub = { sendMail: function(options, callback) { callback(false,true); }};

      sendMailSpy = sinon.spy(transportStub, 'sendMail');
      sinon.stub(nodemailer, 'createTransport').returns(transportStub);
    });

    it('sends an email', (done) => {
      emailService.sendToEditor(testHelpers.makeLetter(), {email: 'journalist@newspaper.com'})
        .then(() => {
            expect(sendMailSpy).to.have.been.called;
        })
        .then(done)
        .catch(done);
    });

    it('should address the email to the editors email', (done) => {
      emailService.sendToEditor(testHelpers.makeLetter(), {email: 'journalist@newspaper.com'})
        .then(() => {
            expect(sendMailSpy).to.have.been.calledWith(sinon.match({
              to: 'journalist@newspaper.com'
            }));
        })
        .then(done)
        .catch(done);
    });

    it('should use the sender name and last name to create the from email', (done) => {
      emailService.sendToEditor(testHelpers.makeLetter(), {email: 'journalist@newspaper.com'})
        .then(() => {
            expect(sendMailSpy).to.have.been.calledWith(sinon.match({
              from: 'Donald Trump <donald.trump@done.on.friday.com>'
            }));
        })
        .then(done)
        .catch(done);
    });

    it('should use the body sent in params', (done) => {
      let sendThis = testHelpers.makeLetter();
      sendThis.body = 'ran out of ideas.';

      emailService.sendToEditor(sendThis, {email: 'journalist@newspaper.com'})
        .then(() => {
            expect(sendMailSpy).to.have.been.calledWith(sinon.match({
              text: 'ran out of ideas.'
            }));
        })
        .then(done)
        .catch(done);
    });

    it('should use the subject sent in params', (done) => {
      let sendThis = testHelpers.makeLetter();
      sendThis.subject = 'we care about clean energy';

      emailService.sendToEditor(sendThis, {email: 'journalist@newspaper.com'})
        .then(() => {
            expect(sendMailSpy).to.have.been.calledWith(sinon.match({
              subject: 'we care about clean energy'
            }));
        })
        .then(done)
        .catch(done);
    });

    it('should set the reply-to header to the senders email address', (done) => {
      let letter = testHelpers.makeLetter();
      letter.email = 'personThatSentTheLetter@gmail.com';

      emailService.sendToEditor(letter, {email: 'journalist@newspaper.com'})
        .then(() => {
            expect(sendMailSpy).to.have.been.calledWith(sinon.match({
              'h:Reply-To': 'personThatSentTheLetter@gmail.com'
            }));
        })
        .then(done)
        .catch(done);
    });

    it('does not send an email if disabled in configuration', (done) => {
      configStub.withArgs('email.sendEmails').returns(false);
      emailService.sendToEditor(testHelpers.makeLetter(), {email: 'journalist@newspaper.com'})
        .then(() => {
            expect(sendMailSpy).not.to.have.been.called;
        })
        .then(done)
        .catch(done);
    });
  });

  describe('sad', () => {
    beforeEach(() => {
      transportStub = { sendMail: function(options, callback) { callback(true,false); }};
      sendMailSpy = sinon.spy(transportStub, 'sendMail');
      sinon.stub(nodemailer, 'createTransport').returns(transportStub);
    });

    it('throws an error when something unexpected happens', (done) => {
      emailService.sendToEditor(testHelpers.makeLetter(), {email: 'journalist@newspaper.com'})
        .then(() => {
            done.fail('sendToEditor should not have succeded. It should have failed.');
        })
        .catch((error) => {
            expect(error).to.not.be.null;
        })
        .then(done)
        .catch(done);
    });
  });
});
