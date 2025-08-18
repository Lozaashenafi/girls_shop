// models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    stockQuantity: { type: Number, default: 0 },
    imageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
