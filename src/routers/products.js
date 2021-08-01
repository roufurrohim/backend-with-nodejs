const express = require('express');
const productsController = require('../controllers/products');

const productsRouter = express.Router();
productsRouter.get('/products', productsController.getList);
productsRouter.get('/products/:id', productsController.getDetail);
productsRouter.post('/products', productsController.insert);
productsRouter.patch('/products/:id', productsController.update);
productsRouter.delete('/products/:id', productsController.destroy);

module.exports = productsRouter;
