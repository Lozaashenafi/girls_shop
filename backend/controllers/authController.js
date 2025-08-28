import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/secrate.js";

// Generate JWT Token
const generateToken = (id, role, fullName) => {
  return jwt.sign({ id, role, fullName }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

const authController = {
  register: async (req, res, next) => {
    try {
      const {
        fullName,
        email,
        password,
        phone,
        address,
        city,
        country,
        postalCode,
        role,
      } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }],
      });

      if (existingUser) {
        return res.status(403).json({
          message: "Email is already registered",
          success: false,
        });
      }

      // Create new user
      const newUser = await User.create({
        fullName,
        email,
        passwordHash: password,
        phone,
        address,
        city,
        country,
        postalCode,
        role: role || "Customer",
      });

      // Generate token
      const token = generateToken(newUser._id, newUser.role, newUser.fullName);

      // Remove password from response
      const { passwordHash, ...userWithoutPassword } = newUser.toObject();

      return res.status(201).json({
        message: "User created successfully",
        user: userWithoutPassword,
        token,
        success: true,
      });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { fullName, email, phone, address, city, country, postalCode } =
        req.body;

      // Check if user exists
      const existingUser = await User.findById(id);
      if (!existingUser) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }

      // Check if email is being changed to one that already exists
      if (email && email !== existingUser.email) {
        const emailExists = await User.findOne({ email, _id: { $ne: id } });
        if (emailExists) {
          return res.status(400).json({
            message: "Email already in use",
            success: false,
          });
        }
      }

      // Update user data
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          fullName: fullName || existingUser.fullName,
          email: email || existingUser.email,
          phone: phone || existingUser.phone,
          address: address || existingUser.address,
          city: city || existingUser.city,
          country: country || existingUser.country,
          postalCode: postalCode || existingUser.postalCode,
        },
        { new: true, runValidators: true }
      );

      // Remove password from response
      const { passwordHash, ...userWithoutPassword } = updatedUser.toObject();

      return res.status(200).json({
        message: "User updated successfully",
        user: userWithoutPassword,
        success: true,
      });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  },

  delete: async (req, res, next) => {
    try {
      const { id } = req.params;

      const existingUser = await User.findById(id);
      if (!existingUser) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }

      await User.findByIdAndDelete(id);

      return res.status(200).json({
        message: "User deleted successfully",
        success: true,
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      return res.status(500).json({
        message: "Internal server error",
        success: false,
      });
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      // Check if the user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Check if the password matches
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Generate token
      const token = generateToken(user._id, user.role, user.fullName);

      // Remove password from response
      const { passwordHash, ...userWithoutPassword } = user.toObject();

      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: userWithoutPassword,
      });
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  logout: async (req, res, next) => {
    try {
      // In a stateless JWT implementation, logout is handled client-side
      res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  changePassword: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { currentPassword, newPassword } = req.body;

      // Retrieve user
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      // Verify current password
      const isCurrentPasswordValid = await user.matchPassword(currentPassword);
      if (!isCurrentPasswordValid) {
        return res.status(401).json({
          success: false,
          message: "Current password is incorrect",
        });
      }

      // Update password
      user.passwordHash = newPassword;
      await user.save();

      return res.status(200).json({
        success: true,
        message: "Password changed successfully",
      });
    } catch (error) {
      console.error("Error changing password:", error);
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },
};

export const {
  register,
  update,
  delete: deleteUser,
  login,
  logout,
  changePassword,
} = authController;
