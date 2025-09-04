
import React, { useState } from "react";

import { Link } from "react-router-dom";
import banner from "../assets/s1.png";
import mainbanner from "../assets/mainbanner.png";
import Footer from "./Footer";




function AboutPage() {
 const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  return (
    
    <div className="pt-4">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-96">
        <img
          src="../src/assets/s1.png" // Replace with your actual banner path
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start px-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">About Us</h1>
          <div className="text-white mt-2 space-x-2">
            <span className="text-sm">Home</span>
            <span className="text-sm">—</span>
            <span className="text-sm">Company</span>
          </div>
        </div>
      </div>

<section className="max-w-6xl mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {/* Store Image */}
    <img
      src={banner} // Replace with your image path
      alt="Dry Fruit Store"
      className="rounded-lg shadow-md w-full"
    />

    {/* Text Content */}
    <div>
      <h2 className="text-3xl font-bold mb-2">About Us</h2>
      <p className="text-lg font-semibold text-[#6d0019] mb-4">
        Dry Fruit House brings you a collection of carefully selected foods from India and across the world.
      </p>
      <p className="text-gray-700 leading-relaxed">
        In our passionate search to offer food that is unique and full of health, we have ensured you get only the best products.
        Our products are well-loved for their quality and taste. We have gained expertise in fine Indian food products and food
        ingredients across categories – Dry Fruits, Chocolates, Gift Boxes and Spices. We are importing fine quality Nuts, dry
        fruits and drinks from the source from which they are available at their best. We are sure you will find our quality
        products appetizing.
      </p>
    </div>
  </div>

  {/* Extra Paragraphs */}
  <div className="mt-10 space-y-6 text-gray-700 leading-relaxed">
    <p>
      We started our first outlet at HSR Layout, Bangalore in 2016. We focus on stringent quality control and prompt service in
      order to ensure market standards. Our focus on quality is evident in our product range. We do not compromise on quality and
      there is very high level of customer appreciation resulting in long-lasting relations.
    </p>
    <p>
      The company's excellent performance is the result of persistent efforts to achieve high efficiency in the business. Dry Fruit
      House has established relationships with key leaders in the domestic as well as the international market.
    </p>
    <p>
      Our goal is to nourish people's lives by offering a wide variety of convenient, delicious, and hygienic food choices that can
      help everyone enjoy a balanced, healthful diet. We provide gifting varieties such as chocolate bouquets, dryfruit packs,
      fancy dry fruit baskets and plenty of other varieties.
    </p>
  </div>
</section>
 <section
      className="relative h-64 md:h-80 bg-cover bg-center"
      style={{ backgroundImage: `url(${mainbanner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-4">
        <h2 className="text-white text-center text-xl md:text-3xl font-medium max-w-3xl">
          Dry Fruit House brings you a collection of carefully selected foods from India and across the world.
        </h2>
      </div>
    </section>

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

{/* Video Banner with Play Button */}
<div className="relative w-full mt-16">
  <img
    src={mainbanner}
    alt="Store Preview"
    className="w-full h-auto object-cover"
  />

  <button
    onClick={() => setIsVideoOpen(true)}
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition hover:scale-105">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 text-[#6d0019]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </button>
</div>

{/* Video Modal */}
{isVideoOpen && (
  <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
    <div className="relative w-full max-w-3xl mx-auto aspect-video">
      <iframe
        src="https://www.youtube.com/embed/Yn2fGIqJt-Q" // <-- Change to your video link
        title="Promo Video"
        className="w-full h-full rounded-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {/* Close Button */}
      <button
        className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        onClick={() => setIsVideoOpen(false)}
      >
        ✕
      </button>
    </div>
  </div>
)}


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

export default AboutPage;
