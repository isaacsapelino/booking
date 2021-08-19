const { DataTypes } = require('Sequelize');
const sequelize = require('../db/database');
const booking = require('./booking');

const agentsScheme = sequelize.define('Agents', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    agentsName: DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps: true
});

module.exports = agentsScheme;