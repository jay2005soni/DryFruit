import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import sliderRoutes from "./routes/sliderRoutes.js"; // ✅ Import slider routes
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url"; // <-- 1. Import fileURLToPath

// --- ES Module fix for __dirname ---
const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
connectDB();

// --- Static Folder (for uploaded images) ---
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); 

// --- Routes ---
app.use("/api/admin", adminRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/slider", sliderRoutes); // ✅ Add slider route

// --- Server Start ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
