const cloudinary = require("../config/clousinaryConfig.js");
const ProductRepository = require("../repositories/productRepository.js");
const fs = require("fs/promises");

async function createProduct(productDetails) {
  // 1. We should if an image is comming to create the product, then we should first upload it on cloudinary
  const imagePath = productDetails.imagePath;
  if (imagePath) {
    try {
      const cloudinaryResponse = await cloudinary.uploader.upload(imagePath);
      var productImage = cloudinaryResponse.secure_url;
      await fs.unlink(imagePath);
    } catch (error) {
      console.log(error);
      throw { reason: "Not able to create product", statusCode: 500 };
    }
  }
  // 2. Then use the url from cloudinary and product details to add product in db
  const product = await ProductRepository.createProduct({
    ...productDetails,
    productImage: productImage,
  });

  if (!product) {
    throw { reason: "Not able to create product", statusCode: 500 };
  }

  return product;
}

module.exports = {
  createProduct,
};
