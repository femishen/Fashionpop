import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const router = express.Router();

/* Place Order */
router.post("/", async (req, res) => {
  const { userId } = req.body;

  const cart = await Cart.findOne({ userId });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const totalAmount = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    userId,
    items: cart.items,
    totalAmount,
  });

  cart.items = [];
  await cart.save();

  res.status(201).json(order);
});

/* Get orders */
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ userId });
  res.json(orders);
});

export default router;
