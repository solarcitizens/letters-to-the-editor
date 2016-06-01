'use strict';

const letterService = require('../services/letterService');
const publicationService = require('../services/publicationService');
const emailService = require('../services/emailService');
const transformLetter = require('../parsers/letterTransformer').transformLetter;
const _ = require('underscore');
const Q = require('q');

function getEditorsInformation(letter) {
  return [letter,
    publicationService.findByNameAndPostCode(letter.postCode, letter.publications)];
}

function sendLetterToEditors(letter, editors) {

  let sendToChosenEditors = _.map(editors, (editor) => {
    return emailService
    .sendToEditor(letter, editor)
    .fail((error) => {
      throw Error(editor.title);
    });
  });

  return Q.allSettled(sendToChosenEditors);
}

function allSucceded(promisesResults) {
  return _.chain(promisesResults)
    .filter({state: 'rejected'})
    .isEmpty()
    .value();
}

function failedPublications(promisesResults) {
  return _.chain(promisesResults)
    .filter({state: 'rejected'})
    .pluck('reason')
    .pluck('message')
    .value();
}

function send(req, res) {
  let newLetter = transformLetter(req.body);

  return letterService.createLetter(newLetter)
    .then(getEditorsInformation)
    .spread(sendLetterToEditors)
    .then((sendEmailResults) => {

      if (allSucceded(sendEmailResults)) {
        return res.sendStatus(201);
      }

      return res.status(206).send(failedPublications(sendEmailResults));

    })
    .catch((error) => {
      console.log(error);
      return res.status(400).send("letter creation failed");
    });
}

module.exports = {
  send: send
};
