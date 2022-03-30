const { DataTypes } = require('sequelize')

const sequelize = require('../config/connection');
const userModel = require('./user')

let cols = {
    id_products: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name_products: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    price: {
        type: DataTypes.DECIMAL(5, 1),
        allowNull: true,

    },
    image_products: {
        type: DataTypes.STRING(200),
        allowNull: true,
    },
    users_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

};


let config = {
    tableName: "products_intertec",
    timestamps: false,
    freezeTableName: true,
    underscored: true,


}
//Declarate Model For Users   
const product = sequelize.define('products', cols, config);

product.belongsTo(userModel, {
    foreignKey: 'users_id',
    as: 'user'
})

module.exports = product;