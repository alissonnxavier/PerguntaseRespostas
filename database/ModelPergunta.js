const sequelise = require('sequelize');
const connection = require('./database');


const Pergunta = connection.define('pergunta', {
    id:{
        type: sequelise.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: sequelise.STRING,
        allowNull: false
    },
    descricao: {
        type: sequelise.STRING,
        allowNull: false
    }

});

Pergunta.sync({force: false}).then(()=>{console.log('Tabela criada')});

module.exports = Pergunta;