import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  // Dry Fruits Data
  const products = {
    1: {
      name: "Premium Cashew Nuts",
      brand: "By NutriChoice",
      price: "₹650 / 500g",
      description: "Rich in protein, healthy fats, and minerals. Perfect for snacking and cooking.",
      image: "/src/assets/cashew.png",
      stock: "In Stock",
      delivery: "Aug 25 - Aug 28",
      details: {
        bestBy: "Dec 12, 2025",
        firstAvailable: "Jan 10, 2022",
        weight: "500g",
        asin: "DRYFRT001",
        available: "Always Available",
        country: "India",
        dimensions: "12 x 10 x 5 cm",
        rating: "⭐ 4.8 out of 5 stars | 1,245 ratings"
      },
    },
    2: {
      name: "California Almonds",
      brand: "By NutriChoice",
      price: "₹550 / 500g",
      description: "Crunchy and nutritious almonds for daily energy boost.",
      image: "/src/assets/Almonds.png",
      stock: "In Stock",
      delivery: "Aug 26 - Aug 29",
      details: {
        bestBy: "Nov 20, 2025",
        firstAvailable: "Feb 15, 2021",
        weight: "500g",
        asin: "DRYFRT002",
        available: "Always Available",
        country: "USA",
        dimensions: "14 x 9 x 5 cm",
        rating: "⭐ 4.7 out of 5 stars | 3,680 ratings"
      },
    },
    3: {
      name: "Organic Walnuts",
      brand: "By NutriChoice",
      price: "₹700 / 500g",
      description: "Packed with antioxidants and omega-3 fatty acids for a healthy lifestyle.",
      image: "/src/assets/walnuts.jpg",
      stock: "In Stock",
      delivery: "Aug 27 - Aug 30",
      details: {
        bestBy: "Oct 10, 2025",
        firstAvailable: "Mar 22, 2020",
        weight: "500g",
        asin: "DRYFRT003",
        available: "Always Available",
        country: "Chile",
        dimensions: "15 x 11 x 6 cm",
        rating: "⭐ 4.6 out of 5 stars | 2,310 ratings"
      },
    },
    4: {
      name: "Roasted Pistachios",
      brand: "By NutriChoice",
      price: "₹800 / 500g",
      description: "Tasty and healthy snack loaded with protein.",
      image: "/src/assets/pistachios.jpg",
      stock: "In Stock",
      delivery: "Aug 28 - Aug 31",
      details: {
        bestBy: "Sep 05, 2025",
        firstAvailable: "Apr 12, 2021",
        weight: "500g",
        asin: "DRYFRT004",
        available: "Always Available",
        country: "Iran",
        dimensions: "13 x 10 x 5 cm",
        rating: "⭐ 4.9 out of 5 stars | 4,125 ratings"
      },
    },
  };

  const product = products[id];

  if (!product) return <h2 className="text-center mt-10 text-red-500">Product Not Found</h2>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* ---------- TOP SECTION ---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Image */}
        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 h-80 object-contain border rounded-lg shadow"
          />
          <div className="flex gap-2 mt-4">
            <img src={product.image} alt="thumb1" className="w-16 h-16 border rounded cursor-pointer" />
            <img src={product.image} alt="thumb2" className="w-16 h-16 border rounded cursor-pointer" />
          </div>
        </div>

        {/* Right Info */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 text-sm mb-2">{product.brand}</p>

          <div className="flex items-center gap-2 mb-3">
            ⭐⭐⭐⭐☆ <span className="text-sm text-gray-500">(1,620 Reviews | 100 Questions)</span>
          </div>

          <p className="text-green-600 font-semibold mb-2">{product.stock}</p>
          <p className="text-3xl font-bold text-orange-600 mb-4">{product.price}</p>

          <div className="flex items-center gap-4 mb-4">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 border rounded px-2 py-1"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded font-semibold text-white">
              Add to Cart
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded font-semibold text-white">
              Buy Now
            </button>
          </div>

          <p className="text-gray-700 mb-3">
            Delivery: <span className="font-semibold">{product.delivery}</span>
          </p>

          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>

      {/* ---------- PRODUCT INFORMATION ---------- */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
        <div>
          <h3 className="text-lg font-semibold mb-3">Product Description</h3>
          <p className="text-gray-700 text-sm mb-2">{product.description}</p>
          <p className="text-gray-700 text-sm">
            These dry fruits are carefully selected to ensure premium quality, rich taste and freshness.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Product Information</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Best By:</strong> {product.details.bestBy}</li>
            <li><strong>Date First Available:</strong> {product.details.firstAvailable}</li>
            <li><strong>Package Dimensions:</strong> {product.details.dimensions}</li>
            <li><strong>Item Weight:</strong> {product.details.weight}</li>
            <li><strong>ASIN:</strong> {product.details.asin}</li>
            <li><strong>Customer Reviews:</strong> {product.details.rating}</li>
            <li><strong>Availability:</strong> {product.details.available}</li>
            <li><strong>Country of Origin:</strong> {product.details.country}</li>
          </ul>
        </div>
      </div>

      {/* ---------- BOTTOM TABS ---------- */}
      <div className="mt-10">
        <div className="border-b flex gap-6 text-gray-700 font-semibold">
          <button className="pb-2 border-b-2 border-orange-500">Product Overview</button>
          <button className="pb-2 hover:border-b-2 hover:border-orange-500">Customer Reviews</button>
          <button className="pb-2 hover:border-b-2 hover:border-orange-500">Certifications</button>
          <button className="pb-2 hover:border-b-2 hover:border-orange-500">Q & A</button>
        </div>
        <div className="mt-4 text-gray-600">
          <p>{product.description} Full details & specifications will go here...</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
