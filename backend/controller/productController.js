import Product from "../models/product.js";

// @desc    Add new product
// @route   POST /api/products
// @access  Admin
export const addProduct = async (req, res) => {
  console.log(`[3. CONTROLLER] addProduct function started.`);

  try {
    console.log("  - Request Body (text fields):", req.body);
    console.log("  - Request Files (uploads):", req.files);

    const { title, description, benefits } = req.body;

    if (!req.files || req.files.length === 0) {
      console.error("  - ERROR: No files were uploaded.");
      return res.status(400).json({ message: "At least one image is required" });
    }

    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);
    const lastProduct = await Product.findOne().sort({ productId: -1 });
    const newProductId = lastProduct ? lastProduct.productId + 1 : 1;

    const product = new Product({
      productId: newProductId,
      title,
      description,
      benefits,
      images: imagePaths,
    });

    // ✅ FIX: Save the product FIRST...
    const savedProduct = await product.save();

    // ✅ ...THEN log the success message.
    console.log("  - SUCCESS: Product saved to database.");

    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(`[4. CATCH BLOCK] An error occurred!`, error);
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product by productId (numeric)
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ productId: id });

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
