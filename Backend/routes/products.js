import express from "express";
import Product from "../models/Product.js";
import upload from "../config/upload.js";

const router = express.Router();

// ➕ Add product
router.post("/", upload.single("image"), async (req, res) => {
  const { name, price, category } = req.body;

  const product = new Product({
    name,
    price,
    category,
    image: `/uploads/products/${req.file.filename}`,
  });

  await product.save();
  res.json(product);
});

router.put("/:id", async (req, res) => {
  const { name, price, category } = req.body;

  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    { name, price, category },
    { new: true }
  );

  res.json(updated);
});

// 📦 Get products (with category filter)
router.get("/", async (req, res) => {
  const { category } = req.query;

  const products = category
    ? await Product.find({ category })
    : await Product.find();

  res.json(products);
});

// ❌ Delete product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;
