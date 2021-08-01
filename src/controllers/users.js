const bcrypt = require('bcrypt');
const usersModel = require('../models/users_model');
const { success, failed, resLogin } = require('../helpers/response');

const users = {
  getList: (req, res) => {
    try {
      const { query } = req;
      const search = query.search === undefined ? '' : query.search;
      const field = query.field === undefined ? 'id' : query.field;
      const typeSort = query.sort === undefined ? 'ASC' : query.sort;
      const limit = query.limit === undefined ? '5' : query.limit;
      const offset = query.page === undefined || query.page === 1 ? 0 : (query.page - 1) * limit;
      usersModel
        .getList(search, field, typeSort, limit, offset)
        .then(async (result) => {
          const allData = await usersModel.getAll();
          const response = {
            data: result,
            totalPage: Math.ceil(allData.length / limit),
            search,
            limit,
            page: req.query.page,
          };
          success(res, response, 200, 'Get all users success');
        })
        .catch((err) => {
          failed(res, 404, err);
        });
    } catch (err) {
      failed(res, 404, err);
    }
  },
  getDetail: (req, res) => {
    try {
      const { id } = req.params;
      usersModel
        .getDetail(id)
        .then((result) => {
          success(res, result, 200, 'Get details user success');
        })
        .catch((err) => {
          failed(res, 404, err);
        });
    } catch (err) {
      failed(res, 404, err);
    }
  },
  insert: (req, res) => {
    try {
      const { body } = req;
      const hash = bcrypt.hashSync(body.password, 10);
      usersModel
        .insert(body, hash)
        .then((result) => {
          success(res, result, 201, 'Create data user success');
        })
        .catch((err) => {
          failed(res, 400, err);
        });
    } catch (err) {
      failed(res, 400, err);
    }
  },
  login: (req, res) => {
    try {
      const { body } = req;
      usersModel
        .login(body)
        .then((result) => {
          if (result <= 0) {
            resLogin(res, 'Email salah');
          } else {
            const hash = result[0].password;
            const pwd = bcrypt.compareSync(body.password, hash);
            if (pwd === true) {
              success(res, result, 200, 'Login success');
            } else {
              resLogin(res, 'Password salah');
            }
          }
        })
        .catch((err) => {
          failed(res, 400, err);
        });
    } catch (err) {
      failed(res, 400, err);
    }
  },
  update: (req, res) => {
    try {
      const { id } = req.params;
      const { body } = req;
      usersModel
        .update(id, body)
        .then((result) => {
          success(res, result, 200, 'Update data users success');
        })
        .catch((err) => {
          failed(res, 400, err);
        });
    } catch (err) {
      failed(res, 400, err);
    }
  },
  destroy: (req, res) => {
    try {
      const { id } = req.params;
      usersModel
        .destroy(id)
        .then((result) => {
          success(res, result, 200, 'Delete data users success');
        })
        .catch((err) => {
          failed(res, 404, err);
        });
    } catch (err) {
      failed(res, 404, err);
    }
  },
};

module.exports = users;
