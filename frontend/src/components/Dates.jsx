import React, { useState } from "react";

import almondImage from "../assets/Dates1.png";
import mamroImage from "../assets/Dates2.png";
import cashewImage from "../assets/Dates3.png";

// Sample product data
const products = [
  {
    id: 1,
    title: "Premium Ajwa Dates",
    imageUrl: almondImage,
    weights: ["100 gram", "250 gram", "500 gram"],
    price: 124,
  },
  {
    id: 2,
    title: "Finset Mabroom Dates",
    imageUrl: mamroImage,
    weights: ["100 gram", "250 gram", "500 gram"],
    price: 380,
  },
  {
    id: 3,
    title: "Safawi Dates",
    imageUrl: cashewImage,
    weights: ["100 gram", "250 gram", "500 gram"],
    price: 164,
  },
  {
    id: 1,
    title: "Premium Ajwa Dates",
    imageUrl: almondImage,
    weights: ["100 gram", "250 gram", "500 gram"],
    price: 124,
  },
  {
    id: 2,
    title: "Finset Mabroom Dates",
    imageUrl: mamroImage,
    weights: ["100 gram", "250 gram", "500 gram"],
    price: 380,
  },
  {
    id: 3,
    title: "Safawi Dates",
    imageUrl: cashewImage,
    weights: ["100 gram", "250 gram", "500 gram"],
    price: 164,
  },
];

function Dates() {
  const [selectedProductType, setSelectedProductType] = useState("");
  const [selectedWeights, setSelectedWeights] = useState(
    products.map(() => "100 gram")
  );

  const handleWeightChange = (index, value) => {
    const updatedWeights = [...selectedWeights];
    updatedWeights[index] = value;
    setSelectedWeights(updatedWeights);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Product Type Selector */}
      <div className="flex items-center gap-4 mb-6">
        <label htmlFor="productType" className="font-semibold">
          Product Type:
        </label>
        <select
          id="productType"
          value={selectedProductType}
          onChange={(e) => setSelectedProductType(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="">Select</option>
          <option value="dry-fruits">Dry Fruits</option>
          <option value="nuts">Nuts</option>
        </select>

        <span className="ml-auto font-semibold text-gray-500">
          [Premium Quality Dry Fruits]
        </span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-[#f8e3c6] rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-xl transition-shadow"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-48 h-48 object-contain"
            />

            <h3 className="mt-4 font-semibold text-lg text-center">
              {product.title}
            </h3>

            {/* Weight Selector */}
            <select
              className="mt-2 border border-gray-300 rounded px-2 py-1 text-sm"
              value={selectedWeights[index]}
              onChange={(e) => handleWeightChange(index, e.target.value)}
            >
              {product.weights.map((weight) => (
                <option key={weight} value={weight}>
                  {weight}
                </option>
              ))}
            </select>

            {/* Price */}
            <p className="mt-2 text-[#6d0019] font-semibold text-lg">
              ₹{product.price.toFixed(2)}
            </p>

            {/* View Details Button */}
            <button className="mt-2 bg-[#6d0019] text-white px-4 py-2 rounded-md text-sm hover:bg-[#8a1c2b]">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dates;
