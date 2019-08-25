var mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,

    user: 'root',

    password: '',
    database: 'zsk62jlt4f6hbvr7'
});

connection.connect();
module.exports = connection;