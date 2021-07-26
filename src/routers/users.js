const express = require("express");
const usersController = require("../controllers/users");

const usersRouter = express.Router();
usersRouter.get("/users", usersController.getList);
usersRouter.get("/users/:id", usersController.getDetail);
usersRouter.post("/users", usersController.insert);
usersRouter.patch("/users/:id", usersController.update);
usersRouter.delete("/users/:id", usersController.destroy);

module.exports = usersRouter;
