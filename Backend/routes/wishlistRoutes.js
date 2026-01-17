import express from "express";
import Wishlist from "../models/Wishlist.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, productId } = req.body;

  let wishlist = await Wishlist.findOne({ userId });

  if (!wishlist) {
    wishlist = await Wishlist.create({
      userId,
      products: [productId],
    });
  } else {
    wishlist.products.push(productId);
    await wishlist.save();
  }

  res.json(wishlist);
});

export default router;
