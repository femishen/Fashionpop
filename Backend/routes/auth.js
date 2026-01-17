import express from "express";
import User from "../models/User.js";

const router = express.Router();

/* REGISTER */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists)
      return res.status(400).json({ message: "User already exists" });

    const user = new User({
      name,
      email,
      password, // (plain for now – ok for project)
      role: "customer",
    });

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Register failed" });
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Login failed" });
  }
});

export default router;
