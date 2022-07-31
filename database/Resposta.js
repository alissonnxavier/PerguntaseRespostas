const Sequelize = require('sequelize');
const connection = require('./database');

const Resposta = connection.define('Respostas', {

    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntasId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({force: false}).then(()=>{console.log('Tabela criada')});

module.exports = Resposta;
