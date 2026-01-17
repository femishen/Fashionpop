import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

/* GET PRODUCTS BY CATEGORY */
router.get("/", async (req, res) => {
  try {
    const { category } = req.query;

    const products = category
      ? await Product.find({ category })
      : await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
