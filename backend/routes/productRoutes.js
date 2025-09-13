import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { addProduct, getProducts, getProductById } from "../controller/productController.js";

const router = express.Router();

const logRoute = (req, res, next) => {
  console.log(`[2. ROUTER] Request reached /api/products router.`);
  next();
};
// Upload multiple images for product (max 5 images)
router.post("/add", upload.array("images", 5), addProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
