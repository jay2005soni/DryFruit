import express from "express";
import { registerAdmin, loginAdmin, getAdminDashboard } from "../controller/adminController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginAdmin);
router.get("/dashboard", protect, isAdmin, getAdminDashboard);

export default router;
