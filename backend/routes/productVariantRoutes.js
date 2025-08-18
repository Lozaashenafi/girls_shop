import express from "express";
import {
  createVariant,
  getVariantsByProduct,
  deleteVariant,
} from "../controllers/productVariantController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.get("/:productId", getVariantsByProduct);
// router.post("/", protect, admin, createVariant);
router.post("/", upload.single("image"), createVariant);
router.delete("/:id", protect, admin, deleteVariant);

export default router;
