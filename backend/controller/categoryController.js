import Category from "../models/category.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 }); // newest first
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addCategory = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    const { title } = req.body;
    const imageUrl = `/uploads/${req.file.filename}`;

    const newCategory = new Category({ title, imageUrl });
    await newCategory.save();

    res.status(201).json(newCategory); // return the newly created category
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
