const usersModel = require("../models/users_model");
const { success, failed } = require("../helpers/response");

const users = {
  getList: (req, res) => {
    try {
      const query = req.query;
      const search = query.search === undefined ? "" : query.search;
      const field = query.field === undefined ? "id" : query.field;
      const typeSort = query.sort === undefined ? "ASC" : query.sort;
      const limit = query.limit === undefined ? "5" : query.limit;
      const offset = query.page === undefined || query.page == 1 ? 0 : (query.page - 1) * limit;
      usersModel
        .getList(search, field, typeSort, limit, offset)
        .then(async (result) => {
          const allData = await usersModel.getAll();
          const response = {
            data: result,
            totalPage: Math.ceil(allData.length / limit),
            search: search,
            limit: limit,
            page: req.query.page,
          };
          success(res, response, 200, "Get all users success");
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
      const id = req.params.id;
      usersModel
        .getDetail(id)
        .then((result) => {
          success(res, result, 200, "Get details user success");
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
      const body = req.body;
      usersModel
        .insert(body)
        .then((result) => {
          success(res, result, 201, "Create data user success");
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
      const id = req.params.id;
      const body = req.body;
      usersModel
        .update(id, body)
        .then((result) => {
          success(res, result, 200, "Update data users success");
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
      const id = req.params.id;
      usersModel
        .destroy(id)
        .then((result) => {
          success(res, result, 200, "Delete data users success");
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
