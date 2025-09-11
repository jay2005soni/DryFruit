import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL, SERVER_URL } from "../config";

function RetailerProduct() {
  const { id } = useParams(); // comes from /retailer/:id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    axios
      .get(`${API_URL}products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % product.images.length);

  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Image Slider */}
      <div className="flex items-center gap-2">
        <button onClick={prevImage}>⬅</button>
        <img
          src={`${SERVER_URL}${product.images[currentImage]}`}
          alt={product.title}
          className="w-96 h-96 object-cover rounded-lg"
        />
        <button onClick={nextImage}>➡</button>
      </div>

      <h2 className="text-2xl font-bold mt-4">{product.title}</h2>

      {/* Tabs */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setActiveTab("description")}
          className={activeTab === "description" ? "font-bold" : ""}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("benefits")}
          className={activeTab === "benefits" ? "font-bold" : ""}
        >
          Benefits
        </button>
      </div>

      {activeTab === "description" && <p className="mt-2">{product.description}</p>}
      {activeTab === "benefits" && <p className="mt-2">{product.benefits}</p>}
    </div>
  );
}

export default RetailerProduct;
