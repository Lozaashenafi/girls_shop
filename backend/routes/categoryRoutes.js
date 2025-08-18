import express from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/categoryController.js";
import upload from "../middlewares/upload.js"; // your multer config

const router = express.Router();

// Single file upload with key "image"
router.post("/", upload.single("image"), createCategory);
router.get("/", getCategories);

export default router;
