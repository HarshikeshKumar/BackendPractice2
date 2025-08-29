const Product = require("../schema/productSchema");

async function createProduct(productDetails) {
  try {
    const response = await Product.create(productDetails);

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function getProductById(productId) {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    console.log(error);
  }
}

async function deleteProductById(productId) {
  try {
    const response = await Product.findByIdAndDelete(productId);
    return true;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createProduct,
  getProductById,
  deleteProductById,
};
