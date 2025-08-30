const express = require("express");
const {
  addProduct,
  getProduct,
  deleteProduct,
} = require("../controllers/productController.js");
const uploader = require("../middlewares/multerMiddleware.js");

const productRouter = express.Router();

productRouter.post("/", uploader.single("productImage"), addProduct);
productRouter.get("/:id", getProduct);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
