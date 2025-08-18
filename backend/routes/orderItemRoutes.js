import express from "express";
import {
  createOrderItem,
  getAllOrderItems,
  getOrderItemsByOrder,
  updateOrderItem,
  deleteOrderItem,
  createOrderItems,
} from "../controllers/orderItemController.js";

const router = express.Router();

// Create
router.post("/", createOrderItem);
// Create multiple order items
router.post("/bulk", createOrderItems);

// Read all
router.get("/", getAllOrderItems);

// Read by orderId
router.get("/order/:orderId", getOrderItemsByOrder);

// Update
router.put("/:id", updateOrderItem);

// Delete
router.delete("/:id", deleteOrderItem);

export default router;
