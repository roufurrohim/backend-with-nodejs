const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require("./src/routers/users");
const productsRouter = require("./src/routers/products");
const categoryRouter = require("./src/routers/category");

const app = express();
app.use(bodyParser.json());
app.use(usersRouter);
app.use(productsRouter);
app.use(categoryRouter);

app.listen(5000, () => {
  console.log("Service running on port 5000");
});
