const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'database',
  user: 'root',
  password: '12345',
  database: 'reviews'
});

connection.connect();

module.exports = connection;
