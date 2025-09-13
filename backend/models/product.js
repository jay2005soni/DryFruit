import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
  productId: { type: Number, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    benefits: { type: String, required: true },
    images: [{ type: String, required: true }], // array of image paths
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
