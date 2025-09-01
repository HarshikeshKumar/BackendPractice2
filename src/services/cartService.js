const { getCartByUserId } = require("../repositories/cartRepository.js");
const NotFoundError = require("../utils/notFoundError.js");
const { getProductById } = require("../repositories/productRepository.js");
const BadRequestError = require("../utils/badRequestError.js");
const AppError = require("../utils/appError.js");

async function getCart(userId) {
  const cart = await getCartByUserId(userId);
  if (!cart) {
    throw new NotFoundError("Cart");
  }
  return cart;
}

// Add to cart
async function addToCart(userId, productId) {
  const cart = await getCart(userId);
  const product = await getProductById(productId);
  if (!product) {
    throw new NotFoundError("Product");
  }
  if (!product.inStock && product.quantity <= 0) {
    throw new BadRequestError(["Product not available in stock"]);
  }

  // May be the product is already in stock
  let foundProduct = false;
  cart.items.forEach((item) => {
    if (item.product._id == productId) {
      if (product.quantity >= item.quantity + 1) {
        item.quantity += 1;
      } else {
        throw new AppError(
          "The quantity of the item requested is not available",
          404
        );
      }

      foundProduct = true;
    }
  });
  if (!foundProduct) {
    cart.items.push({
      product: productId,
      quantity: 1,
    });
  }

  await cart.save();

  return cart;
}

module.exports = {
  getCart,
  addToCart,
};
