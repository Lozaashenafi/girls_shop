import Wishlist from "../models/Wishlist.js";
import Product from "../models/Product.js";

// @desc    Add product to wishlist
// @route   POST /api/wishlist
// @access  Protected
export const addToWishlist = async (req, res) => {
  try {
    const userId = req.user._id; // from protect middleware
    const { productId } = req.body;

    // Check if product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Check if already in wishlist
    const exists = await Wishlist.findOne({ userId, productId });
    if (exists) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    const wishlistItem = await Wishlist.create({ userId, productId });
    res.status(201).json(wishlistItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get wishlist items for a user
// @route   GET /api/wishlist
// @access  Protected
export const getWishlist = async (req, res) => {
  try {
    const userId = req.user._id;

    const wishlistItems = await Wishlist.find({ userId }).populate("productId");
    res.json(wishlistItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Remove product from wishlist
// @route   DELETE /api/wishlist/:productId
// @access  Protected
export const removeFromWishlist = async (req, res) => {
  try {
    const userId = req.user._id;
    const productId = req.params.productId;

    const item = await Wishlist.findOne({ userId, productId });
    if (!item) {
      return res.status(404).json({ message: "Item not found in wishlist" });
    }

    await item.deleteOne();
    res.json({ message: "Product removed from wishlist" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
