const db = require("../config/db");

const categoryModel = {
  getList: (search, field, typeSort, limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM category WHERE name LIKE '%${search}%' ORDER BY ${field} ${typeSort} LIMIT ${limit} OFFSET ${offset}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM category`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM category WHERE id=${id}`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
          // console.log(result);
        }
      });
    });
  },
  insert: (body) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO category (name) VALUE ("${body.name}")`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  update: (id, body) => {
    return new Promise((resolve, reject) => {
      db.query(`UPDATE category SET name="${body.name}" WHERE id='${id}'`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  destroy: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM category WHERE id= '${id}'`, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
};

module.exports = categoryModel;
