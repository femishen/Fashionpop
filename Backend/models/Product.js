import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    oldPrice: Number,
    discount: Number,
    category: String,
    image: String,
    rating: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
