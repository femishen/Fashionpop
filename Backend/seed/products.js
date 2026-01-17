import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const products = [
  {
    name: "Floral Summer Dress",
    price: 59.99,
    category: "women",
    rating: 4.8,
  },
  {
    name: "Men Formal Shirt",
    price: 49.99,
    category: "men",
    rating: 4.6,
  },
  {
    name: "Kids Hoodie",
    price: 44.99,
    category: "kids",
    rating: 4.7,
  },
  {
    name: "Baby Romper",
    price: 24.99,
    category: "infant",
    rating: 4.9,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
