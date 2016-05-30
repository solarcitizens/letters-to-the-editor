'use strict';

const config = require('config');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
const Q = require('q');

let sendEmail = () => {
  if (!config.get('email.sendEmails')) {
    return Q.resolve();
  }

  let deferred = Q.defer();

  let mailgunAuth = {
    auth: {
      api_key: config.get('email.apiKey'),
      domain: config.get('email.domain')
    }
  };

  let transport = nodemailer.createTransport(mailgunTransport(mailgunAuth));
  let mailOptions = {
    from: 'Solar Citizens <email@mg.solarcitizens.org.au>',
    to: 'rdoherty@thoughtworks.com',
    subject: 'Hello ✔',
    text: 'Hello world'
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
      deferred.reject('CHANGE THIS FOR A BETTER MESSAGE');
    }
    deferred.resolve(`Message sent ${info.response}`);
  });

  return deferred.promise;
};

module.exports = {
  sendEmail: sendEmail
};
