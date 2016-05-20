'use strict';

const uuid = require('node-uuid');

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
  let letter = Object.assign({}, newLetter, { id: uuid.v4() });
  return save(letter)
    .then((savedLetter) => {
      return savedLetter.dataValues;
    })
    .catch(handleError("everything failed."));
};

module.exports = {
    createLetter: createLetter
};
