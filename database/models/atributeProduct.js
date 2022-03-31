const { DataTypes } = require('sequelize')

const sequelize = require('../config/connection');
const productModel = require('./product')

let cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    names_atributes: {
        type: DataTypes.STRING(200),
        allowNull:true,
    },
    values_atributes: {
        type: DataTypes.STRING(200),
        allowNull:true,
    },
    id_products:{
        type: DataTypes.INTEGER,
        allowNull:true,
    },

};


let config = {
    tableName: "atributes_products_intertec",
    timestamps: false,
    freezeTableName: true,
    underscored: true,


}
//Declarate Model For Users   
const atributeProduct = sequelize.define('atribute', cols, config);

atributeProduct.belongsTo(productModel, {
    foreignKey: 'id_products',
    as: 'product'
})

module.exports = atributeProduct;