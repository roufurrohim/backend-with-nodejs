const mysql = require('mysql2');
// const connection = require("../helpers//");
const { DB_USERNAME, DB_PASSWORD } = require('../helpers/env');

const db = mysql.createConnection({
  host: 'localhost',
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: 'db_coffee_shop',
});

db.connect((err) => {
  if (err) {
    const er = {
      message: err.sqlMessage,
    };
    console.log(er);
  } else {
    console.log('Connection Success');
  }
});

module.exports = db;
