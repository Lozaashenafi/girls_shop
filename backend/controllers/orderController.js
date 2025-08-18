import Order from "../models/Order.js";

// Create new order
export const createOrder = async (req, res) => {
  try {
    const { userId, totalAmount, shippingAddress, paymentStatus } = req.body;

    const newOrder = new Order({
      userId,
      totalAmount,
      shippingAddress,
      paymentStatus,
      status: "Pending",
    });

    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating order", error: err.message });
  }
};

// Get all orders (admin purpose)
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("userId", "name email");
    res.status(200).json(orders);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: err.message });
  }
};

// Get single order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "userId",
      "name email"
    );
    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching order", error: err.message });
  }
};

// Update order status (admin or user)
export const updateOrder = async (req, res) => {
  try {
    const { status, paymentStatus } = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { status, paymentStatus },
      { new: true }
    );

    if (!updatedOrder)
      return res.status(404).json({ message: "Order not found" });

    res.status(200).json(updatedOrder);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error updating order", error: err.message });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder)
      return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error deleting order", error: err.message });
  }
};
