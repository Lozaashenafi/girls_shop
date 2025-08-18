import express from "express";
import {
  createReview,
  getReviewsByProduct,
  deleteReview,
} from "../controllers/reviewController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/:productId", getReviewsByProduct);

// Protected routes
router.post("/", protect, createReview);
// router.post("/", createReview);
router.delete("/:id", protect, admin, deleteReview);

export default router;
