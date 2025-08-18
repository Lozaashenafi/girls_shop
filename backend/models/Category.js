// models/Category.js
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    description: String,
    imageUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
