import { useState, useEffect } from "react";
import Bg from "../assets/bg.png";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    { name: "Cashew", img: "src/assets/kaju.png" },
    { name: "Almonds", img: "src/assets/Almonds.png" },
    { name: "Walnuts", img: "src/assets/walnuts.png" },
    { name: "Raisins", img: "src/assets/raisins.png" },
    { name: "Pistachios", img: "src/assets/pistachios.png" },
    { name: "Apricots", img: "src/assets/apricots.png" },
  ];

  const products = [
    { id: 1, name: "Almonds", price: "$10.00", img: "src/assets/A1.png" },
    { id: 2, name: "Cashews", price: "$12.50", img: "src/assets/cashew.png" },
    { id: 3, name: "Pistachios", price: "$15.00", img: "src/assets/P1.png" },
  ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-[#0B1A34] text-white px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          Rahba<span className="text-yellow-400">✔</span>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Our Product</li>
          <li className="hover:text-yellow-400 cursor-pointer">Trending</li>
          <li className="hover:text-yellow-400 cursor-pointer">Sell</li>
          <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
          <li className="hover:text-yellow-400 cursor-pointer">Customer Service</li>
        </ul>

        {/* Search & Icons */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-md text-black hidden md:block"
          />
          <span>❤️</span>
          <span>🛒</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[400px] flex items-center px-6"
        style={{
         backgroundImage: `url(${Bg})`,
        }}
      >
        <div className="text-white bg-opacity-50 p-6 rounded max-w-lg">
          <h1 className="text-white text-3xl font-bold mb-4 leading-snug">
            Rahba Wholesale And Retail Sale Of Legumes, Cereals, Spices And More.
          </h1>
          <p className="text-gray-200 mb-4 text-sm">
            Always Attentive To Consumer Needs And Satisfied It, We Research And Select
            Quality Varieties Of Legumes, Cereals, Health Seeds And Spices.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Product</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col items-center">
              <img
                src={cat.img}
                alt={cat.name}
                className="rounded-full border-2 border-gray-300 w-20 h-20 object-cover"
              />
              <p className="mt-2 text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Deals Section */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Deals of the Day</h2>
            <span className="text-lg font-semibold">
              Time Left: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <div key={p.id} className="bg-white rounded-lg shadow p-4 text-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-40 object-cover mb-3 rounded"
                />
                <h3 className="font-bold text-lg">{p.name}</h3>
                <p className="text-green-600 font-semibold">{p.price}</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 px-4 py-1 mt-3 rounded font-medium">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B1A34] text-white py-6 mt-10 text-center">
        <p>© 2025 Rahba. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
