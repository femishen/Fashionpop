import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* 🔥 SERVE BACKEND IMAGES */
app.use("/uploads", express.static("uploads"));

/* ROUTES */
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

/* DB CONNECTION */
mongoose
  .connect("mongodb://127.0.0.1:27017/fashion_store")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("Server is running");
});

/* START SERVER */
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
