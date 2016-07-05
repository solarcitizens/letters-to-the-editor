'use strict';

const letterService = require('../services/letterService');
const publicationService = require('../services/publicationService');
const emailService = require('../services/emailService');
const transformLetter = require('../parsers/letterTransformer').transformLetter;
const _ = require('underscore');
const Q = require('q');

function rejectBots(letter) {
  if (letter.isBot) {
    throw Error('rejecting apparent spam letter: ' + letter);
  }
  return letter;
}

function addPublicationsInformation(letter) {
  let publicationsInfo = publicationService.findByNameAndPostCode(letter.postCode, letter.publications);
  return Object.assign({}, letter, {publications: publicationsInfo});
}

function sendLetterToEditors(letter) {
  let emailsToSelectedEditors = _.map(letter.publications, (publication) => {
    return emailService
    .sendToEditor(letter, {email: publication.email})
    .fail((error) => {
      throw Error(publication.title);
    });
  });

  return Q.allSettled(emailsToSelectedEditors);
}

function allSucceded(promisesResults) {
  return _.chain(promisesResults)
    .filter({state: 'rejected'})
    .isEmpty()
    .value();
}

function allFailed(promisesResults) {
  return _.chain(promisesResults)
    .filter({state: 'fulfilled'})
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

function respondToUser(res) {
  return function(sendEmailResults) {
    if (allSucceded(sendEmailResults)) {
      return res.sendStatus(201);
    }

    if (allFailed(sendEmailResults)) {
      throw Error('None of the emails were sent');
    }

    return res.status(206).send(failedPublications(sendEmailResults));
  }
}

function sendThankYouEmail(letter) {
  return function() {
    return emailService.sendThankYouEmail({email: letter.email}, letter.body);
  }
}

function send(req, res) {
  let letter = transformLetter(req.body);

  return Q(letter)
    .then(addPublicationsInformation)
    .tap(letterService.createLetter)
    .then(rejectBots)
    .then(sendLetterToEditors)
    .then(respondToUser(res))
    .then(sendThankYouEmail(letter))
    .catch((error) => {
      console.error(error);
      return res.status(400).send('letter creation failed');
    });
}

module.exports = {
  send: send
};
