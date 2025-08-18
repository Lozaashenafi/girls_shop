import Payment from "../models/Payment.js";

// Create Payment
export const createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json({ message: "Payment created successfully", payment });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating payment", error: error.message });
  }
};

// Get all Payments
export const getPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate("orderId");
    res.status(200).json(payments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching payments", error: error.message });
  }
};

// Get Payment by ID
export const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate("orderId");
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.status(200).json(payment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching payment", error: error.message });
  }
};

// Update Payment
export const updatePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.status(200).json({ message: "Payment updated successfully", payment });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating payment", error: error.message });
  }
};

// Delete Payment
export const deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) return res.status(404).json({ message: "Payment not found" });
    res.status(200).json({ message: "Payment deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting payment", error: error.message });
  }
};
