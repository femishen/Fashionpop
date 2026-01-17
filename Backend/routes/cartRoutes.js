import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();

/* Add to cart */
router.post("/", async (req, res) => {
  const { userId, item } = req.body;

  let cart = await Cart.findOne({ userId });

  if (!cart) {
    cart = await Cart.create({
      userId,
      items: [item],
    });
  } else {
    const existing = cart.items.find(
      (i) => i.productId == item.productId
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.items.push(item);
    }
    await cart.save();
  }

  res.json(cart);
});

/* Get cart */
router.get("/:userId", async (req, res) => {
  const cart = await Cart.findOne({ userId });
  res.json(cart);
});

export default router;
