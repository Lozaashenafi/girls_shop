import ProductVariant from "../models/ProductVariant.js";
import Product from "../models/Product.js";

export const createVariant = async (req, res) => {
  try {
    const { productId, color, size, additionalPrice, stockQuantity } = req.body;
    // console.log(req.body);
    // Ensure product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const variant = await ProductVariant.create({
      productId,
      color,
      size,
      additionalPrice,
      stockQuantity,
      image: req.file ? `/uploads/${req.file.filename}` : null,
    });

    res.status(201).json(variant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getVariantsByProduct = async (req, res) => {
  try {
    const variants = await ProductVariant.find({
      productId: req.params.productId,
    });
    res.json(variants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteVariant = async (req, res) => {
  try {
    const variant = await ProductVariant.findById(req.params.id);
    if (!variant) {
      return res.status(404).json({ message: "Variant not found" });
    }

    await variant.deleteOne();
    res.json({ message: "Variant removed" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
