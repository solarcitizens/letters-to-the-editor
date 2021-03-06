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
  if (params.attachments) {
    mailOptions.attachments = params.attachments;
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
  senderEmail = senderEmail.replace(/[^a-zA-Z\d\.]/g, '');

  return `${fullName} <${senderEmail}@${config.get('email.domain')}>`;
}

function sendToEditor(letterInfo, editor) {
  let emailParams = {
    subject: letterInfo.subject,
    body: letterInfo.body,
    to: editor.email,
    from: senderEmail(letterInfo.firstName, letterInfo.lastName),
    replyTo: letterInfo.email
  };

  return sendEmail(emailParams);
}

function thankYouText(letter) {
  return `${config.get('email.thankYou.note')}${letter}`;
}

function sendThankYouEmail(user, letter) {

  let fromEmail = `${config.get('email.thankYou.fromName')} <${config.get('email.thankYou.fromEmail')}>`;
  let replyTo = `${config.get('email.thankYou.replyTo')}`

  let emailParams = {
    subject: 'Thank You',
    body: thankYouText(letter),
    to: user.email,
    from: fromEmail,
    replyTo:replyTo
  };

  return sendEmail(emailParams);
}

function sendUserDataExportEmail(exportDataFilePath) {
  let email = {
    subject: 'Letters to the Editor user data export',
    body: 'User data export attached.',
    to: config.get('admin.export.toEmail'),
    from: `export@${config.get('email.domain')}`,
    attachments: [
      { path: exportDataFilePath, encoding: 'utf-8' }
    ]
  };

  return sendEmail(email);
}

module.exports = {
  sendToEditor,
  sendThankYouEmail,
  sendUserDataExportEmail
};
