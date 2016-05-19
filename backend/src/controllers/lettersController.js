'use strict';

const lettersService = require('../services/lettersService');

function parseLetter(req) {
  return {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      street: req.body.address,
      city: "",
      state: "",
      postCode: req.body.postCode
  };
}

function send(req, res) {
  let newLetter = parseLetter(req);

  lettersService.createLetter(newLetter);

  return res.status(200).send("success");
}

module.exports = {
  send: send
};
