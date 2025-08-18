import OrderItem from "../models/OrderItem.js";

// Create new order item
export const createOrderItem = async (req, res) => {
  try {
    const { orderId, productId, variantId, price } = req.body;

    const orderItem = new OrderItem({
      orderId,
      productId,
      variantId,
      price,
    });

    await orderItem.save();
    res.status(201).json(orderItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const createOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.insertMany(req.body); // req.body must be an array
    res.status(201).json(orderItems);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all order items
export const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.find()
      .populate("orderId", "status totalAmount")
      .populate("productId", "name")
      .populate("variantId", "name price");

    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get order items by orderId
export const getOrderItemsByOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const orderItems = await OrderItem.find({ orderId })
      .populate("productId", "name")
      .populate("variantId", "name price");

    res.json(orderItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order item
export const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedOrderItem = await OrderItem.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedOrderItem) {
      return res.status(404).json({ message: "Order item not found" });
    }

    res.json(updatedOrderItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete order item
export const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedOrderItem = await OrderItem.findByIdAndDelete(id);

    if (!deletedOrderItem) {
      return res.status(404).json({ message: "Order item not found" });
    }

    res.json({ message: "Order item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
