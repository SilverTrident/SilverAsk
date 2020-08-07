const Sequelize = require('sequelize');
const connection = require('../database/index');

const toAsk = connection.define('toAsk',{
    title : {type : Sequelize.STRING, allowNull : false},
    description : {type : Sequelize.TEXT, allowNull : false}
})

toAsk.sync({force : false}).then(()=>{}).catch((err)=>{console.log(err)});

module.exports = toAsk;