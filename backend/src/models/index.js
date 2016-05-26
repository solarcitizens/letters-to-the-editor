'use strict';

const pg = require('pg');

/* https://github.com/sequelize/sequelize/issues/3781 */
(function becauseOfSomeSequelizeBug() {
    delete pg.native;
})();

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/db.json')[env];

let connection = require(__dirname + '/../db/connection.js');

let Letter = connection.import(__dirname + "/letter.js");

let models = {"Letter" : Letter,
              "Sequelize": Sequelize};

module.exports = models;
