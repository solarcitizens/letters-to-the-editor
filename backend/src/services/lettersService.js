'use strict';

const models = require('../models'),
      Letter = models.Letter;

function save(letter) {
  return Letter.create.bind(Letter)(letter);
}

function handleError(message) {
    return function(error) {
        console.error(message, { error: error.stack });
        return models.Sequelize.Promise.reject(message);
    };
}

let createLetter = (newLetter) => {
  return save(newLetter)
    .then((savedLetter) => {
      return savedLetter.dataValues;
    })
    .catch(handleError("everything failed."));
};

module.exports = {
    createLetter: createLetter
};
