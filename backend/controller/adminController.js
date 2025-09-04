import Admin from "../models/admin.js";
import jwt from "jsonwebtoken";

// Generate Token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, "SECRET_KEY", { expiresIn: "1d" });
};

// @desc Register new Admin
// @route POST /api/admin/register
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({ name, email, password });

    res.status(201).json({
      message: "Admin registered successfully",
      admin: { id: admin._id, name: admin.name, email: admin.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Login Admin
// @route POST /api/admin/login
export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (admin && (await admin.matchPassword(password))) {
      res.json({
        message: "Login successful",
        token: generateToken(admin._id, admin.role),
        admin: { id: admin._id, name: admin.name, email: admin.email },
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Example Protected Route (Admin Dashboard)
// @route GET /api/admin/dashboard
export const getAdminDashboard = async (req, res) => {
  res.json({ message: `Welcome Admin ${req.admin.name}` });
};
