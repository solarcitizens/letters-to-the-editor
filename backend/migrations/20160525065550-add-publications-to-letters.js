'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('letters', 'publications', {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('letters', 'publications');
  }
};
