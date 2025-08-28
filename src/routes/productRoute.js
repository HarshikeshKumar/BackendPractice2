const express = require("express");
const { addProduct } = require("../controllers/productController.js");
const uploader = require("../middlewares/multerMiddleware.js");

const productRouter = express.Router();

productRouter.post("/", uploader.single("productImage"), addProduct);

module.exports = productRouter;
