'use strict';

const config = require('config');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

function sendEmail() {
  if (!config.get('email.sendEmails')) {
    return;
  }

  let mailgunAuth = {
    auth: {
      api_key: config.get('email.apiKey'),
      domain: config.get('email.domain')
    }
  };
  
  let transport = nodemailer.createTransport(mailgunTransport(mailgunAuth));
  let mailOptions = {
    from: 'Solar Citizens <email@solarcitizens.org.au>',
    to: 'rdoherty@thoughtworks.com',
    subject: 'Hello ✔',
    text: 'Hello world'
  };

  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message sent: ' + info.response);
  });
}

module.exports = {
  sendEmail: sendEmail
};
