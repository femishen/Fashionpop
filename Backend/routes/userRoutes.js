import express from "express";
import User from "../models/User.js";

const router = express.Router();

// create user once
router.post("/init", async (req, res) => {
  const user = await User.create({});
  res.json(user);
});

router.post("/cart", async (req, res) => {
  const { userId, productId } = req.body;
  const user = await User.findById(userId);
  user.cart.push({ productId, qty: 1 });
  await user.save();
  res.json(user.cart);
});

router.post("/wishlist", async (req, res) => {
  const { userId, productId } = req.body;
  const user = await User.findById(userId);
  user.wishlist.push(productId);
  await user.save();
  res.json(user.wishlist);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id)
    .populate("cart.productId")
    .populate("wishlist");
  res.json(user);
});

export default router;
