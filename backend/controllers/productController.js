import Product from "../models/Product.js";

// Create a cosmetic product (Admin only)
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all lipsticks (example filtered fetch)
export const getLipsticks = async (req, res) => {
  try {
    const lipsticks = await Product.find({ category: "lipstick" });
    res.json(lipsticks);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
