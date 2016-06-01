'use strict';

const uuid = require('node-uuid');

module.exports = (sequelize, DataTypes) => {
    var Letter = sequelize.define('letter', {
        id: { type: DataTypes.UUID, defaultValue: uuid.v4(), primaryKey: true },
        email: { type: DataTypes.STRING, allowNull: false },
        firstName: {type: DataTypes.STRING, allowNull:false},
        lastName: {type: DataTypes.STRING, allowNull:false},
        phone: {type: DataTypes.STRING, allowNull:false},
        street: {type: DataTypes.STRING, allowNull:false},
        city: {type: DataTypes.STRING, allowNull:false},
        state: {type: DataTypes.STRING, allowNull:false},
        postCode: {type: DataTypes.STRING, allowNull:false},
        optedIn: {type: DataTypes.BOOLEAN, allowNull:false},
        publications: {type: DataTypes.JSON, allowNull:false},
        body: { type: DataTypes.TEXT, allowNull: false },
        subject: { type: DataTypes.STRING, allowNull: false }
    }, {
        paranoid: true
    });
    return Letter;
};
