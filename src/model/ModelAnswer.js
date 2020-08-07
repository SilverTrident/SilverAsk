const Sequelize = require('sequelize');
const connection = require('../database/index');

const Answers = connection.define("answer",{
    body : {type: Sequelize.TEXT, allowNull: false},
    questionId:{type: Sequelize.INTEGER, allowNull : false}

})

Answers.sync({force:false});

module.exports = Answers;

