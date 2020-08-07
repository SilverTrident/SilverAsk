const Sequelize = require('sequelize');
const database = 'silverask';
const user = 'root';
const password = 'root'
const addConfig ={
    host: 'localhost',
    dialect : 'mysql'
}

const connection = new Sequelize(database,user,password,addConfig);

module.exports = connection;

