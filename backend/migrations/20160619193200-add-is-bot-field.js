'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('letters', 'isBot', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('letters', 'isBot');  
  }
};
