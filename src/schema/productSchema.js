const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is require"],
      minlength: [5, "Product name must be atleast 5 character long"],
      trim: true,
    },
    description: {
      type: String,
      minlength: [5, "Product description must be atleast 2 character long"],
    },
    productImage: {
      type: String,
    },
    quantity: {
      type: Number,
      required: true,
      default: 10,
    },
    price: {
      type: String,
      required: [true, "Product price is required"],
    },
    category: {
      type: String,
      enum: ["veg", "non-veg", "drinks", "sides"],
      default: "veg",
    },
    inStock: {
      type: String,
      required: [true, "In Stock status is required"],
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
