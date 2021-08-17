const { DataTypes } = require('Sequelize');
const sequelize = require('../db/database');

const bookingScheme = sequelize.define('Bookings', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    appointmentName: DataTypes.STRING,
    appointmentDate: DataTypes.DATE,
    appointmentTime: DataTypes.STRING,
    place: DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps: true
});

module.exports = bookingScheme;