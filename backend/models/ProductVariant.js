// models/ProductVariant.js
import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  color: String,
  size: String,
  image: String,
  additionalPrice: { type: Number, default: 0 },
  stockQuantity: { type: Number, default: 0 },
});

export default mongoose.model("ProductVariant", productVariantSchema);
