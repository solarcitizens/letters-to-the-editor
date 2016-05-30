'use strict';

const letterService = require('../services/letterService');
const emailService = require('../services/emailService');
const transformLetter = require('../parsers/letterTransformer').transformLetter;

function send(req, res) {
  let newLetter = transformLetter(req.body);

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
