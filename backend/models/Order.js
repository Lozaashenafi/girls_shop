// models/Order.js
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderDate: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
      default: "Pending",
    },
    totalAmount: { type: Number, required: true },
    shippingAddress: String,
    paymentStatus: {
      type: String,
      enum: ["Paid", "Unpaid", "Failed"],
      default: "Unpaid",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
