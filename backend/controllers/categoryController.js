// controllers/categoryController.js
import Category from "../models/Category.js";

// @desc    Create a new category
// @route   POST /api/categories
// @access  Admin
export const createCategory = async (req, res) => {
  try {
    const { categoryName, description } = req.body;

    const exists = await Category.findOne({ categoryName });
    if (exists) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const category = await Category.create({
      categoryName,
      description,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
