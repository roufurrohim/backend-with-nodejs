const productsModel = require("../models/products_model");
const { success, failed } = require("../helpers/response");

const products = {
  getList: (req, res) => {
    try {
      const query = req.query;
      const search = query.search === undefined ? "" : query.search;
      const field = query.field === undefined ? "id" : query.field;
      const typeSort = query.sort === undefined ? "ASC" : query.sort;
      const limit = query.limit === undefined ? "5" : query.limit;
      const offset = query.page === undefined || query.page == 1 ? 0 : (query.page - 1) * limit;
      productsModel.getList(search, field, typeSort, limit, offset).then(async (result) => {
        const allData = await productsModel.getAll();
        const response = {
          data: result,
          totalPage: Math.ceil(allData.length / limit),
          search: search,
          limit: limit,
          page: req.query.page,
        };
        success(res, response, 200, "Get all products success");
      });
    } catch (err) {
      // res.json(err);
      failed(err);
    }
  },
  getDetail: (req, res) => {
    try {
      const id = req.params.id;
      productsModel
        .getDetail(id)
        .then((result) => {
          success(res, result, 200, "Get details product success");
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      console.log(err);
    }
  },
  insert: (req, res) => {
    try {
      const body = req.body;
      productsModel
        .insert(body)
        .then((result) => {
          success(res, result, 201, "Insert data product success");
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      console.log(err);
    }
  },
  update: (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
      productsModel
        .update(id, body)
        .then((result) => {
          success(res, result, 200, "Update data product success");
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (error) {
      console.log(error);
    }
  },
  destroy: (req, res) => {
    try {
      const id = req.params.id;
      productsModel
        .delete(id)
        .then((result) => {
          success(res, result, 200, "Delete data product success");
        })
        .catch((err) => {
          res.json(err);
        });
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = products;
