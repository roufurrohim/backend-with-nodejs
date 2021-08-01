const db = require('../config/db');

const usersModel = {
  getList: (search, field, typeSort, limit, offset) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users WHERE name LIKE "%${search}%" ORDER BY ${field} ${typeSort} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  getAll: () => new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  getDetail: (id, search, field, typeSort, limit, offset) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users WHERE id= '${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const total = result.length;
        const totalPage = Math.ceil(total / limit);
        const output = {
          data: result,
          totalPage,
          limit,
          page: offset,
        };
        resolve(output);
      }
    });
  }),
  insert: (body, hash) => new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO users (email, password, phone, picture, name, address, first_name, last_name, date, gender) VALUE ("${body.email}", "${hash}", ${body.phone}, "${body.picture}", "${body.name}", "${body.address}", "${body.first_name}", "${body.last_name}", "${body.date}", "${body.gender}")`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  login: (body) => new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users WHERE email LIKE "${body.email}"`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
  update: (id, body) => new Promise((resolve, reject) => {
    db.query(
      `UPDATE users SET email="${body.email}", password="${body.password}", phone=${body.phone}, picture="${body.picture}", name="${body.name}", address="${body.address}", first_name="${body.first_name}", last_name="${body.last_name}", date="${body.date}", gender="${body.gender}" WHERE id="${id}"`,
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      },
    );
  }),
  destroy: (id) => new Promise((resolve, reject) => {
    db.query(`DELETE FROM users WHERE id= '${id}'`, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  }),
};

module.exports = usersModel;
