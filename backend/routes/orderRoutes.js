import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Create order
router.post("/", createOrder);

// Get all orders
router.get("/", getOrders);

// Get single order by ID
router.get("/:id", getOrderById);

// Update order (status or payment status)
router.put("/:id", updateOrder);

// Delete order
router.delete("/:id", deleteOrder);

export default router;
