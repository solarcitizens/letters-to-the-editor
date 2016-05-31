'use strict';

const letterService = require('../services/letterService');
const publicationService = require('../services/publicationService');
const emailService = require('../services/emailService');
const transformLetter = require('../parsers/letterTransformer').transformLetter;
const _ = require('underscore');

function getFirstWhileWeImplementThisForMultipleLetters(publications) {
  return _.first(publications);
}

function findPublicationsInfo(letter) {


  return [letter,
      getFirstWhileWeImplementThisForMultipleLetters(
      publicationService.findByNameAndPostCode(letter.postCode, letter.publications))];
}

function send(req, res) {
  let newLetter = transformLetter(req.body);

  return letterService.createLetter(newLetter)
    .then(findPublicationsInfo)
    .spread(emailService.sendToEditor)
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
