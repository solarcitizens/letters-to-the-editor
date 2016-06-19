'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.sequelize.query('ALTER TABLE letters ALTER COLUMN publications TYPE JSON USING to_json(publications)');
  }
};
