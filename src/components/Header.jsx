import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [isShopOpen, setIsShopOpen] = useState(false);

  return (
    <div className="font-sans fixed top-0 left-0 right-0 z-50">
      {/* 🔹 Top Bar */}
      <div className="bg-[#6d0019] text-white flex justify-between items-center px-6 py-2 text-sm">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> <span>+91-7483600212</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>info@dryfruithouse.com</span>
          </div>
        </div>
        <div className="flex gap-4 text-lg">
          <FaFacebook className="cursor-pointer hover:text-gray-300" />
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
          <FaLinkedin className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* 🔹 Navbar */}
      <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <div className="flex items-center gap-2">
          <img src="src/assets/logo.png" alt="Logo" className="h-15" />
        </div>
        <ul className="flex gap-6 text-gray-700 font-medium relative">
          <li className="hover:text-[#6d0019] cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-[#6d0019] cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>

          {/* 🔽 Shop with hover control */}
        <div
  className="relative"
  onMouseEnter={() => setIsShopOpen(true)}
  onMouseLeave={() => setIsShopOpen(false)}
>
  <span className="hover:text-[#6d0019] cursor-pointer">Shop</span>

  {isShopOpen && (
    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-48 z-50">
      <ul className="flex flex-col">
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link to="/shop/nuts">Nuts & Dry Fruits</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link to="/shop/dates">Dates</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link to="/shop/exclusives">DFH Exclusives</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link to="/shop/berries">Berries</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link to="/shop/seeds">Seeds & More</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link to="/shop/gifts">Gift Boxes</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-100">
          <Link to="/shop/exclusives">DFH Exclusive</Link>
        </li>
      </ul>
    </div>
  )}
</div>


          <li className="hover:text-[#6d0019] cursor-pointer">
            <Link to="/bulkorder">Bulk Order</Link>
          </li>
          <li className="hover:text-[#6d0019] cursor-pointer">
            <Link to="/carrer">Career</Link>
          </li>
          <li className="hover:text-[#6d0019] cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
