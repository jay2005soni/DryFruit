import { useState } from "react";
import {
  FaHeadset,
  FaLock,
  FaTruck,
  FaUndo,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import slider1 from "../assets/mainbanner.png";
import slider2 from "../assets/slider2.png";
import nuts from "../assets/nuts.png";
import dates from "../assets/dates.png";
import dfh from "../assets/DFH.png";
import berries from "../assets/Berries.png";
import seeds from "../assets/seeds.png";
import giftbox from "../assets/giftbox.png";
import Header from "./Header";
import banner from "../assets/banner.png";

import gift1 from "../assets/Gift1.png";
import gift2 from "../assets/Gift2.png";
import gift3 from "../assets/Gift3.png";
import gift4 from "../assets/Gift4.png";
import Footer from "./Footer";

const giftImages = [
  { src: gift1, alt: "Gift Box 1" },
  { src: gift2, alt: "Gift Box 2" },
  { src: gift3, alt: "Gift Box 3" },
  { src: gift4, alt: "Gift Box 4" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  const slides = [
    {
      image: slider1,
      title: "Premium Dry Fruits",
      description: "At Dry Fruit House, we take pride in presenting our Premium DryFruits collection...",
    },
    {
      image: slider2,
      title: "Healthy & Tasty",
      description: "Savor the essence of nature's bounty with our handpicked dry fruits...",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const categories = [
    { image: nuts, title: "Nuts & Dry Fruits" },
    { image: dates, title: "Dates" },
    { image: dfh, title: "DFH Exclusives" },
    { image: berries, title: "Berries" },
    { image: seeds, title: "Granola Mix" },
    { image: giftbox, title: "Gift Hampers" },
  ];

  const products = [
  {
    id: 1,
    title: "Breakfast Mix Seeds",
    image: "src/assets/Giftc1.png", // Apni image ka path daalein
    brand: "Dry Fruit House",
  },
  {
    id: 2,
    title: "Best Quality Medjool Dates",
    image: "src/assets/Giftc2.png",
    brand: "Dry Fruit House",
  },
  {
    id: 3,
    title: "Exquisite Brazil Nuts",
    image: "src/assets/Giftc3.png",
    brand: "Dry Fruit House",
  },
  {
    id: 4,
    title: "Premium Walnut Kernels",
    image: "src/assets/Giftc4.png",
    brand: "Dry Fruit House",
  },
];


  const products2 = [
  {
    id: 1,
    title: "Breakfast Mix Seeds",
    image: "src/assets/Dr1.png", // Apni image ka path daalein
    brand: "Dry Fruit House",
  },
  {
    id: 2,
    title: "Best Quality Medjool Dates",
    image: "src/assets/Dr2.png",
    brand: "Dry Fruit House",
  },
  {
    id: 3,
    title: "Exquisite Brazil Nuts",
    image: "src/assets/Dr3.png",
    brand: "Dry Fruit House",
  },
  {
    id: 4,
    title: "Premium Walnut Kernels",
    image: "src/assets/Dr4.png",
    brand: "Dry Fruit House",
  },
];

  return (
    <div className="font-sans">
      

      {/* 🔹 Hero Slider */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <img
          src={slides[currentSlide].image}
          alt="Slide"
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#6d0019] text-white p-3 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#6d0019] text-white p-3 rounded-full"
        >
          ▶
        </button>
      </div>

      {/* 🔹 Categories Section */}
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-8">Our Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16 max-w-7xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md border hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-100 h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Gift Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Latest Gift Boxes <br /> Collection
            </h2>
            <p className="text-gray-600 mb-6">
              Celebrate all festivals in a healthy & delicious way with our exquisite range of dry fruit gift hampers.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800">
              View More
            </button>
          </div>
          <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
            {giftImages.map((gift, index) => (
              <img
                key={index}
                src={gift.src}
                alt={gift.alt}
                className="h-64 w-64 object-cover rounded-lg shadow-md flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Video Section + Floating Features */}
      <div className="relative bg-[#6d0019] pb-28 pt-10">
        <div className="flex justify-center items-center">
          <img
            src={banner}
            alt="Dry Fruit House Showroom"
            className="rounded-lg shadow-lg w-full md:w-3/4"
          />
          <button
            onClick={openVideo}
            className="absolute flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white text-red-600 rounded-full shadow-lg hover:scale-110 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 46.302 46.302"
              fill="currentColor"
            >
              <path d="M39.521,6.781a23.151,23.151,0,0,0-32.74,32.74,23.151,23.151,0,0,0,32.74-32.74ZM23.151,44.457A21.306,21.306,0,1,1,44.457,23.151,21.33,21.33,0,0,1,23.151,44.457Z" />
              <path
                d="M190.3,133.213l-13.256-8.964a3,3,0,0,0-4.674,2.482v17.929a2.994,2.994,0,0,0,4.674,2.481l13.256-8.964a3,3,0,0,0,0-4.963Z"
                transform="translate(-158 -116)"
              />
            </svg>
          </button>
        </div>

        {/* Floating Features Section - React Icons used here */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12 w-full max-w-4xl px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-white shadow-lg rounded-xl p-6">
            <div className="flex flex-col items-center text-center">
              <FaHeadset className="text-3xl text-[#6d0019] mb-3" />
              <h3 className="text-sm font-semibold">Customer Support</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLock className="text-3xl text-[#6d0019] mb-3" />
              <h3 className="text-sm font-semibold">Secure Shopping</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaTruck className="text-3xl text-[#6d0019] mb-3" />
              <h3 className="text-sm font-semibold">Swift Shipping</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUndo className="text-3xl text-[#6d0019] mb-3" />
              <h3 className="text-sm font-semibold">Money Return</h3>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-4 px-4">
          <h2 className="text-white text-3xl md:text-4xl font-bold animate-pulse tracking-wider mb-4">
            Welcome to <span className="text-yellow-400">Dry Fruit House</span>
          </h2>

          <button
            onClick={closeVideo}
            className="absolute top-4 right-6 text-white text-3xl font-bold z-10 hover:text-yellow-400"
          >
            &times;
          </button>

          <div className="relative w-full max-w-3xl">
            <video
              src="/banner.mp4"
              autoPlay
              controls
              controlsList="nodownload"
              className="w-full h-auto rounded-lg shadow-2xl"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
<section
  className="relative py-34 px-46 md:px-40 bg-gray-50"
  style={{
    backgroundImage: `url('src/assets/bg22.png'), url('src/assets/bg22.png)`,
    backgroundPosition: 'left top 4rem, right top 2rem',
    backgroundRepeat: 'no-repeat, no-repeat',
    backgroundSize: '10rem auto, 10rem auto',
    overflow: 'hidden'
  }}
>
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
    Words From Our Delighted Customers
  </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
  {[
    {
      name: "Roshan Prajwal",
      feedback:
        "Excellent quality dry fruits and delicious chocolates! Fresh, flavorful, and perfect for gifting.",
    },
    {
      name: "Bilal Abdullah",
      feedback:
        "A delightful mix of premium dry fruits and irresistible chocolates. Great quality and taste!",
    },
    {
      name: "Prashanth Kumar",
      feedback:
        "Top-notch quality with amazing flavor combinations. A must-visit for dry fruit and chocolate lovers!",
    },
  ].map((review, i) => (
    <div
      key={i}
      className="bg-white rounded-lg shadow-md p-6 flex space-x-6 relative hover:shadow-lg transition"
    >
      {/* Quote icon */}
      <svg
        className="w-8 h-8 text-gray-200 absolute top-4 left-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.17 6.17A5 5 0 1 0 2 13v7h7v-7a5 5 0 0 1-1.83-6.83zm10 0A5 5 0 1 0 12 13v7h7v-7a5 5 0 0 1-1.83-6.83z" />
      </svg>

      {/* Avatar Circle with Initial */}
      <div className="flex-shrink-0">
        <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 text-2xl font-bold">
          {review.name.charAt(0)}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-semibold text-lg mb-2 text-gray-900">{review.name}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed italic">“{review.feedback}”</p>

        {/* Star rating */}
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(5)].map((_, starIdx) => (
            <svg
              key={starIdx}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.027 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>

</section>

<section
  className="relative bg-cover bg-center py-20 px-10 max-w-7xl mx-auto rounded-lg"
  style={{ backgroundImage: `url('src/assets/mainbanner.png')` }} // Yahan apni background image ka path dein
>
  {/* Overlay dark layer */}
  <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

  {/* Content */}
  <div className="relative max-w-md text-white">
    <p className="text-sm mb-2">Want to offer regularly ?</p>
    <h2 className="text-3xl font-bold mb-6 leading-tight">
      Subscribe Our Newsletter <br /> for Get Daily Update
    </h2>

    <form className="flex max-w-sm">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-grow px-4 py-3 rounded-l-md text-white-700 focus:outline-none border border-gray-300 focus:border-[#6d0019] "
      />
      <button
        type="submit"
        className="bg-[#6d0019] px-6 py-3 rounded-r-md font-semibold hover:bg-[#8b0023] transition"
      >
        Subscribe &gt;
      </button>
    </form>
  </div>
</section>

    

        <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-center text-3xl font-semibold mb-10">
        Dry Fruits - Featured Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md">
            <div className="relative bg-[#fbdca8] p-6 rounded-t-lg flex justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-36 h-36 "
              />
              {/* Optional: Dry Fruit House logo or text on top */}
              <span className="absolute top-3 left-3 text-xs font-semibold">
                Dry Fruit House
              </span>
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-4 text-sm text-gray-700 mb-3">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-[#6d0019]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span>{product.brand}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4 text-[#6d0019]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>{product.title}</span>
                </div>
              </div>
              <button className="text-[#6d0019] border border-[#6d0019] rounded-full px-5 py-1 text-sm hover:bg-[#6d0019] hover:text-white transition">
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

<section className="max-w-7xl mx-auto px-6 py-20">
  <h2 className="text-center text-3xl font-semibold mb-14">
    Gift Boxes - Signature Collection
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    {products.map((product) => (
      <div key={product.id} className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div className="relative rounded-t-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-4 left-4 bg-white bg-opacity-90 text-[#6d0019] text-xs font-semibold px-2 py-1 rounded shadow">
            Dry Fruit House
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-center space-x-5 text-sm text-gray-800 mb-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-[#6d0019]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <span>{product.brand}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-[#6d0019]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{product.title}</span>
            </div>
          </div>
          <button className="text-[#6d0019] border border-[#6d0019] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#6d0019] hover:text-white transition duration-300">
            View more
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="max-w-7xl mx-auto px-6 py-6 bg-white rounded-lg shadow-md">
  <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-6 sm:space-y-0 sm:space-x-8">
    {/* Premium Quality */}
    <div className="flex items-center space-x-4">
      <svg
        className="w-8 h-8 text-[#4a1a11]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V7l-8-5-8 5v5c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      <div>
        <h4 className="font-semibold text-sm text-[#4a1a11]">PREMIUM QUALITY</h4>
        <p className="text-xs text-gray-500">100% Quality Guarantee</p>
      </div>
    </div>

    {/* Swift Shipping */}
    <div className="flex items-center space-x-4 border-l border-r border-gray-200 px-6">
      <svg
        className="w-8 h-8 text-[#4a1a11]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h18M3 6h18M3 18h18" />
        <path d="M16 8l4 4-4 4" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
      </svg>
      <div>
        <h4 className="font-semibold text-sm text-[#4a1a11]">SWIFT SHIPPING</h4>
        <p className="text-xs text-gray-500">Delivering across India</p>
      </div>
    </div>

    {/* Easy Return */}
    <div className="flex items-center space-x-4">
      <svg
        className="w-8 h-8 text-[#4a1a11]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 10h18M3 14h18" />
        <path d="M12 3v18" />
        <path d="M16 8l-4-4-4 4" />
      </svg>
      <div>
        <h4 className="font-semibold text-sm text-[#4a1a11]">EASY RETURN</h4>
        <p className="text-xs text-gray-500">Refer return policy</p>
      </div>
    </div>

    {/* 24/7 Support */}
    <div className="flex items-center space-x-4">
      <svg
        className="w-8 h-8 text-[#4a1a11]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 18v-6a9 9 0 0118 0v6" />
        <circle cx="12" cy="18" r="3" />
      </svg>
      <div>
        <h4 className="font-semibold text-sm text-[#4a1a11]">24/7 SUPPORT</h4>
        <p className="text-xs text-gray-500">Support every time</p>
      </div>
    </div>
  </div>
</section>
<Footer/>

    </div>
  );
}
