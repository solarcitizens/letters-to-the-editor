'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Sequelize.Promise.all([
      queryInterface.addColumn('letters', 'body', {type: Sequelize.TEXT, allowNull: true}),
      queryInterface.addColumn('letters', 'subject', {type: Sequelize.STRING, allowNull: true})
    ])
    .then(() => {
        return queryInterface.sequelize.query(`update "letters" set body = 'Some text', subject = 'some text'`);
    }).then(() => {
      return Sequelize.Promise.all([
        queryInterface.changeColumn('letters', 'body', {type: Sequelize.TEXT, allowNull: false}),
        queryInterface.changeColumn('letters', 'subject', {type: Sequelize.STRING, allowNull: false})
      ]);
    }).catch((err) => {
      console.log(err);
      throw new Error('Migration failed');
    });
  },

  down: function (queryInterface, Sequelize) {
    return Sequelize.Promise.all([
      queryInterface.removeColumn('letters', 'body'),
      queryInterface.removeColumn('letters', 'subject')
    ]);
  }
};
