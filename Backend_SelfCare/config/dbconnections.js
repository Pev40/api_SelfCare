const mysql = require('mysql2');
const env = process.env;
const pool = mysql.createPool({host: 'localhost', user: 'root', database: 'selfcare', password: 'root'});
module.exports = pool;