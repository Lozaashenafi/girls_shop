// models/OrderItem.js
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  variantId: { type: mongoose.Schema.Types.ObjectId, ref: "ProductVariant" },
  price: { type: Number, required: true },
});

export default mongoose.model("OrderItem", orderItemSchema);
