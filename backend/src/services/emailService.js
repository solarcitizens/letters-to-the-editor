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

  let deferred = Q.defer();
  let transport = nodemailer.createTransport(mailgunTransport(mailgunAuth));

  let mailOptions = {
    from: params.from,
    to: params.to,
    subject: params.subject,
    text: params.body
  };

  if (params.replyTo) {
    mailOptions['h:Reply-To'] = params.replyTo;
  }

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      deferred.reject(error);
    } else {
      deferred.resolve(`Message sent ${info.response}`);
    }
  });

  return deferred.promise;
};

function senderEmail(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;
  let senderEmail = `${firstName.toLowerCase().trim()}.${lastName.toLowerCase().trim()}`;

  return `${fullName} <${senderEmail}@${config.get('email.domain')}>`;
}

function sendToEditor(letterInfo, editor) {
  editor = editor ? editor : {email: 'rdoherty@thoughtworks.com'};

  let emailParams = {
    subject: letterInfo.subject,
    body: letterInfo.body,
    to: editor.email,
    from: senderEmail(letterInfo.firstName, letterInfo.lastName),
    replyTo: letterInfo.email
  };

  return sendEmail(emailParams);
}

module.exports = {
  sendToEditor: sendToEditor
};
