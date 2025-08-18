// routes/categoryRoutes.js
import express from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/categoryController.js";
import { protect, admin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);

export default router;
