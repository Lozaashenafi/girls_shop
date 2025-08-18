// models/Payment.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ["Card", "Cash", "Bank Transfer"],
    required: true,
  },
  transactionId: String,
  amount: { type: Number, required: true },
  paymentDate: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Success", "Failed", "Pending"],
    default: "Pending",
  },
});

export default mongoose.model("Payment", paymentSchema);
