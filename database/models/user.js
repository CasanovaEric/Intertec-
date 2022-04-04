const { DataTypes } = require('sequelize')

const sequelize = require('../config/connection');


let cols = {
    id_users: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING(200),
        allowNull: false,
        uniqueKey: true,
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        uniqueKey: true,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
    },
    addres: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    zipCode: {
        type: DataTypes.DECIMAL(20),
        allowNull: true,

    },
    image_users: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    password_users: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    passwordConfirm: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    rol_users: {
        type: DataTypes.STRING(200),
        allowNull: true,

    }
};


let config = {
    tableName: "users_intertec",
    timestamps: false,
    freezeTableName: true,


};
//Declarate Model For Users   
const user = sequelize.define('users', cols, config);


module.exports = user;
