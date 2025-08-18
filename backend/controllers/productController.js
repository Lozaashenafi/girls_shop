import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("categoryId");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "categoryId"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, stockQuantity, categoryId } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Product image is required" });
    }

    const product = await Product.create({
      categoryId,
      name,
      description,
      price,
      stockQuantity,
      imageUrl: `/uploads/${req.file.filename}`, // save relative path
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
