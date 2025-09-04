import Slider from "../models/Slider.js";

// Create (Add new slider image)
export const addSlider = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }

    const newSlider = new Slider({
      image: `/uploads/${req.file.filename}`, // store uploaded image path
    });

    await newSlider.save();
    return res
      .status(201)
      .json({ message: "Slider image added successfully", slider: newSlider });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Read (Get all slider images)
export const getSliders = async (req, res) => {
  try {
    const sliders = await Slider.find();
    return res.json(sliders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Update (Replace image by ID)
export const updateSlider = async (req, res) => {
  try {
    const { id } = req.params;

    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Image is required for update" });
    }

    const updatedSlider = await Slider.findByIdAndUpdate(
      id,
      { image: `/uploads/${req.file.filename}` },
      { new: true }
    );

    if (!updatedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    return res.json({ message: "Slider image updated", slider: updatedSlider });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Delete (Remove slider by ID)
export const deleteSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSlider = await Slider.findByIdAndDelete(id);

    if (!deletedSlider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    return res.json({ message: "Slider deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

