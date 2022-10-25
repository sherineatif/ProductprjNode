const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const db = mongoose.connect("mongodb://localhost/ProductsDB");
const Product = require("./models/productModel");
const Category = require("./models/categoryModel");
const productRouter = require("./routes/productrouter")(Product);

const categoryRouter = require("./routes/categoryrouter")(Category);
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", productRouter);

app.use("/api", categoryRouter);
app.get("/", (req, res) => {
  res.send("welcome!");
});
app.listen(port, () => {
  console.log("running on port" + port);
});
