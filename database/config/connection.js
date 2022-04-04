const {Sequelize} = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: null,
    database: 'intertec_db',
    dialect: 'mariadb',
})
module.exports = sequelize;