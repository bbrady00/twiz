const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  shopifyId: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", productSchema);
