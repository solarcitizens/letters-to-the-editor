'use strict';

const uuid = require('node-uuid');

module.exports = (sequelize, DataTypes) => {
    var Letter = sequelize.define('letter', {
        id: { type: DataTypes.UUID, defaultValue: uuid.v4(), primaryKey: true },
        email: { type: DataTypes.STRING, allowNull: false },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        phone: DataTypes.STRING,
        street: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        postCode: DataTypes.STRING
    }, {
        paranoid: true
    });
    return Letter;
};
