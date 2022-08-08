var mysql = require('mysql2');

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    database: 'perguntas',
    multipleStatements: true
});



module.exports = connection;