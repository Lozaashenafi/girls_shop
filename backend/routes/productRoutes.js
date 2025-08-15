import express from "express";
import {
  createProduct,
  getLipsticks,
} from "../controllers/productController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, admin, createProduct);

router.route("/lipsticks").get(getLipsticks);

export default router;
