import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import {
  addSlider,  getSliders,updateSlider,deleteSlider,
} from "../controller/sliderController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addSlider); // Create
router.get("/all", getSliders); // Read
router.put("/update/:id", upload.single("image"), updateSlider); // Update
router.delete("/delete/:id", deleteSlider); // Delete

export default router;
