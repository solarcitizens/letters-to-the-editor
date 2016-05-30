'use strict';

const config = require('config');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');
const Q = require('q');

let sendEmail = (params) => {
  if (!config.get('email.sendEmails')) {
    return Q.resolve();
  }

  let mailgunAuth = {
    auth: {
      api_key: config.get('email.apiKey'),
      domain: config.get('email.domain')
    }
  };

  let fullName = `${params.firstName} ${params.lastName}`;

  let deferred = Q.defer();
  let transport = nodemailer.createTransport(mailgunTransport(mailgunAuth));
  let mailOptions = {
    from: `${fullName} <email@${config.get('email.domain')}>`,
    to: 'rdoherty@thoughtworks.com',
    subject: params.subject,
    text: params.body
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      deferred.reject(error);
    } else {
      deferred.resolve(`Message sent ${info.response}`);
    }
  });

  return deferred.promise;
};

module.exports = {
  sendEmail: sendEmail
};
