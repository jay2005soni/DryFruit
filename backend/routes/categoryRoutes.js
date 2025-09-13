import express from "express";
import { getCategories, addCategory } from "../controller/categoryController.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/receive", getCategories);
router.post("/create", upload.single("image"), addCategory);

export default router;
