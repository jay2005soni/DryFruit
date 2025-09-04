import React from "react";
import bulkBanner from "../assets/bulk-order.jpg"; // Replace with your actual image
import FAQItem from "./FAQItem";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

function BulkOrderPage() {
  return (
    <div className="pt-4">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img
          src={bulkBanner}
          alt="Bulk Ordering Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Bulk Ordering</h1>
          <div className="text-white mt-2 space-x-2 text-lg">
            <span>Home</span>
            <span>—</span>
            <span>Order</span>
          </div>
        </div>
      </div>

      {/* Content */}
         {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Wholesale Dry Fruits</h2>
        <p className="text-gray-700 mb-4">
          Dry Fruit House provides options to buy in bulk quantities. Our company is very popular in premium quality and best price products.
          We provide the best bulk/wholesale prices for dry fruits, nuts, seeds and alike products.
        </p>
        <p className="text-gray-700 mb-10">
          Dry Fruit House is a platform where you get to choose from the best in market and offers you the finest variety of dry fruits. 
          We offer dry fruits such as almonds, cashews, raisins, walnuts, dates and Pistachio. Exotic nuts such as Hazelnuts etc. 
          We also offer a variety of berries such as cranberries, blueberries and seed mixes all of which are sourced and packed hygienically.
        </p>

        {/* Form + Text Box */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side - Text Box */}
          <div className="bg-[#4d0000] text-white p-10 rounded-xl flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4 leading-snug">
                Let us get the<br /> business started!
              </h3>
              <p className="text-xl font-medium">Reach out us today.</p>
            </div>
            {/* Social Icons */}
            <div className="mt-8">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white text-2xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-white text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-white text-2xl">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-white text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white shadow-lg p-8 rounded-xl">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d0019]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Mobile No. *</label>
                  <input
                    type="text"
                    placeholder="Mobile No."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d0019]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Email Id *</label>
                  <input
                    type="email"
                    placeholder="Email Id"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d0019]"
                  />
                </div>
                <div>
                  <label className="block font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d0019]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4d0000] hover:bg-[#330000] text-white py-3 text-lg font-semibold rounded-md transition"
              >
                Send Now
              </button>
            </form>
          </div>
        </div>
      </section>
<FAQSection />


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

<Footer />
    </div>
  );
}

export default BulkOrderPage;
