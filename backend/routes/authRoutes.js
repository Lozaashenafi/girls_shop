import express from "express";
import {
  register,
  login,
  logout,
  update,
  deleteUser as deleteUserController,
  changePassword,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.put("/update/:id", update);
router.delete("/delete/:id", deleteUserController);
router.put("/change-password/:id", changePassword);

export default router;
