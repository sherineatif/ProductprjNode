const mongoose = require("mongoose");
const { Schema } = mongoose;
const productModel = new Schema({
  name: { type: String },
  quantity: { type: Number },
  price: { type: Number },
  imgUrl: { type: String },
  categoryId: { type: Number },
});
module.exports = mongoose.model("products", productModel);
