// routes/productRoutes.js
import {
  getProducts,
  getProductById,
  createProduct,
} from "../controllers/productController.js";
import express from "express";
import upload from "../middlewares/upload.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
// router.post("/", protect, admin, upload.single("image"), createProduct);
router.post("/", upload.single("image"), createProduct);

export default router;
