'use strict';

const config = require('config');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

function sendEmail() {
  let transport = nodemailer.createTransport(mailgunTransport({auth: {api_key: '', domain: ''}}));
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
