const express = require('express');
const usersController = require('../controllers/users');
const midAuth = require('../middleWare/authentic');

const usersRouter = express.Router();
usersRouter.get('/users', midAuth, usersController.getList);
usersRouter.get('/users/:id', midAuth, usersController.getDetail);
usersRouter.post('/users', usersController.insert);
usersRouter.post('/login', usersController.login);
usersRouter.patch('/users/:id', midAuth, usersController.update);
usersRouter.delete('/users/:id', midAuth, usersController.destroy);

module.exports = usersRouter;
