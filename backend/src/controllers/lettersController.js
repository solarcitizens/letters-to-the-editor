'use strict';

const letterService = require('../services/letterService');
const emailService = require('../services/emailService');

function parseLetter(req) {
  return {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      postCode: req.body.postCode,
      optedIn: req.body.optedIn,
      publications: req.body.publications
  };
}

function send(req, res) {
  let newLetter = parseLetter(req);

  return letterService.createLetter(newLetter)
    .then(emailService.sendEmail)
    .then(() => {
      return res.sendStatus(201);
    })
    .catch(() => {
      return res.status(400).send("letter creation failed");
    });
}

module.exports = {
  send: send
};
