'use strict';

const letterService = require('../services/letterService');
const findPublicationsInfo = require('../services/publicationService').findByNameAndPostCode;
const emailService = require('../services/emailService');
const transformLetter = require('../parsers/letterTransformer').transformLetter;
const _ = require('underscore');
const Q = require('q');

function getFirstWhileWeImplementThisForMultipleLetters(publications) {
  return _.first(publications);
}

function getEditorsInformation(letter) {
  return [letter, findPublicationsInfo(letter.postCode, letter.publications)];
}

function sendLetterToEditors(letter, editors) {

  let sendToChosenEditors = _.map(editors, (editor) => {
    return emailService.sendToEditor(letter, editor);
  });

  return Q.any(sendToChosenEditors);
}

function send(req, res) {
  let newLetter = transformLetter(req.body);

  return letterService.createLetter(newLetter)
    .then(getEditorsInformation)
    .spread(sendLetterToEditors)
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
