import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
