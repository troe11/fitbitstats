var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,

    user: 'ql8w4gmk26sbr13l',

    password: 'rra0cauebddtbka9',
    database: 'zsk62jlt4f6hbvr7'
});

connection.connect();
module.exports = connection;

