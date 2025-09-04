import { useParams } from "react-router-dom";
import {
  FaHeart,
  FaLeaf,
  FaSeedling,
  FaCheckCircle,
} from "react-icons/fa"; // 👈 Icons

const products = {
  1: {
    name: "Premium Jumbo Almond",
    price: 124,
    image: "/src/assets/almon.png",
    weights: ["100 gram", "250 gram", "500 gram"],
    sku: "DRYF101",
    description:
      "Jumbo Almonds are rich in Qualities and benefits. Jumbo almonds help in reducing hunger and reduce the intake of calories. These Almonds can be used to Extract oil and Milk. Jumbo Almonds are long in nature and Extra bit in sweetness.",
    features: [
      { text: "Healthy Heart", icon: <FaHeart /> },
      { text: "High Nutrition", icon: <FaLeaf /> },
      { text: "Gluten Free", icon: <FaSeedling /> },
      { text: "Cholesterol Free", icon: <FaCheckCircle /> },
    ],
  },
  2: {
    name: "Mamra Almond (Organic Almond)",
    price: 380,
    image: "/src/assets/mamro.png",
    weights: ["100 gram", "250 gram", "500 gram"],
    sku: "DRYF102",
    description:
      "Mamra Almonds are considered the richest in nutrients among all almonds. They provide instant energy and are a healthy choice for children and adults alike.",
    features: [
      { text: "Boost Energy", icon: <FaLeaf /> },
      { text: "Organic Quality", icon: <FaSeedling /> },
      { text: "Rich in Protein", icon: <FaCheckCircle /> },
    ],
  },
  3: {
    name: "Cashew Nuts (Kaju) Jumbo Sized",
    price: 164,
    image: "/src/assets/cashews.png",
    weights: ["100 gram", "250 gram", "500 gram"],
    sku: "DRYF103",
    description:
      "Jumbo Cashew Nuts are crunchy, tasty, and packed with essential minerals. Ideal for snacking and cooking rich dishes.",
    features: [
      { text: "Rich in Minerals", icon: <FaCheckCircle /> },
      { text: "Healthy Fats", icon: <FaHeart /> },
      { text: "Perfect for Snacking", icon: <FaLeaf /> },
    ],
  },
};

function ProductDetail() {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <h2 className="text-center mt-10 text-red-500">Product Not Found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto pt-40 pb-36 px-6"> {/* 👈 Proper padding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT IMAGE */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-96 h-96 object-contain border rounded-lg shadow"
          />
          <div className="flex gap-2 mt-4">
            <img
              src={product.image}
              alt="thumb1"
              className="w-20 h-20 border rounded"
            />
            <img
              src={product.image}
              alt="thumb2"
              className="w-20 h-20 border rounded"
            />
          </div>
        </div>

        {/* RIGHT INFO */}
        <div>
          {/* Title */}
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-[#6d0019] font-semibold mb-4">
            ₹{product.price}.00
          </p>

          {/* Weight Selector */}
          <select className="border rounded px-3 py-2 mb-3">
            {product.weights.map((w) => (
              <option key={w}>{w}</option>
            ))}
          </select>

          {/* Swift Delivery */}
          <p className="text-red-600 font-semibold mb-4">
            Swift Delivery - Shipping Across India. Bringing the goodness of dry
            fruits to your doorstep.{" "}
            <span className="underline cursor-pointer">Chat with us</span>
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4 border rounded p-4">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center text-gray-700"
              >
                <div className="text-2xl mb-1 text-[#6d0019]">{f.icon}</div>
                <span className="text-sm">{f.text}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold">
              WhatsApp Us
            </button>
            <button className="bg-[#6d0019] text-white px-6 py-2 rounded font-semibold">
              Call Us
            </button>
          </div>

          {/* SKU & Description */}
          <p>
            <strong>SKU:</strong> {product.sku}
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Description:</strong> {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
