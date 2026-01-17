import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: Array,
    totalAmount: Number,
    status: {
      type: String,
      default: "Placed",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
