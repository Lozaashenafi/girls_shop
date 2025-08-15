import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g., "Glossy Lipstick"
    description: { type: String },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: ["lipstick", "eyeshadow", "skincare", "perfume"],
      required: true,
    },
    shade: { type: String }, // e.g., "Rose Pink"
    skinType: { type: String }, // For skincare
    images: [{ type: String }], // Cloudinary URLs
    stock: { type: Number, default: 0 },
    isVegan: { type: Boolean, default: false },
    brand: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
