'use strict';

const pg = require('pg');

/* https://github.com/sequelize/sequelize/issues/3781 */
(function becauseOfSomeSequelizeBug() {
    delete pg.native;
})();

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/db.json')[env];

let connection = new Sequelize(config.database, config.username, config.password, config);

console.log("Path to letter model: " + __dirname + "/letter.js");
let Letter = connection.import(__dirname + "/letter.js");

let models = {"Letter" : Letter,
              "Sequelize": Sequelize};

module.exports = models;
