const { DataTypes } = require('Sequelize');
const sequelize = require('../db/database');

const bookingScheme = sequelize.define('Bookings', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    propertyName: DataTypes.STRING,
    propertyLocation: DataTypes.STRING,
    property: DataTypes.STRING,
    agName: DataTypes.STRING,
    appointmentDate: DataTypes.STRING,
    appointmentTime: DataTypes.STRING,
}, {
    freezeTableName: true,
    timestamps: true
});

bookingScheme.associate = models => {
    bookingScheme.belongsTo(models.Agents, {
        foreignKey: {
            allowNull: false
        }
    })
}

module.exports = bookingScheme;