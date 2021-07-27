const express = require("express");
const categoryController = require("../controllers/category");

const categoryRouter = express.Router();
categoryRouter.get("/category", categoryController.getList);
categoryRouter.get("/category/:id", categoryController.getDetail);
categoryRouter.post("/category", categoryController.insert);
categoryRouter.patch("/category/:id", categoryController.update);
categoryRouter.delete("/category/:id", categoryController.destroy);

module.exports = categoryRouter;
