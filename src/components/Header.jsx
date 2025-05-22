
import {Link} from 'react-router-dom'
import About from './AboutPage';
import { Menu, X } from "lucide-react";

import React, { useState } from 'react';

function Header(){
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm relative">
      {/* Logo */}
    
      <div className="flex items-center space-x-2">
        <img src="src/assets/logo.png" alt="OWN Web Solutions Logo" className="w-32 h-12 object-contain" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 font-semibold text-gray-800">
         <Link className='text-white text-lg font-medium' to="/">Website</Link>
        <ul className='flex gap-5 text-lg text-white '>
            <li>
                <Link className='hover:underline hover:text-[#FFA119]' to="/about">About</Link>
            </li>
            </ul>
      </nav>

      {/* Get In Touch Button */}
      <div className="hidden md:block">
        <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 text-sm font-semibold">
          Get In Touch
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Card */}
      {isMenuOpen && (
        <div className="fixed top-16 right-0 w-full bg-white rounded-lg shadow-lg p-10 z-50 md:hidden  ">
          <a href="#" className="block py-2 text-gray-800 hover:text-green-500">Home</a>
       
          <a href="#" className="block py-2 text-gray-800 hover:text-green-500">Services</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-green-500">Referral</a>
          <a href="#" className="block py-2 text-gray-800 hover:text-green-500">Contact Us</a>
          <button className="mt-4 bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 text-sm font-semibold w-full">
            Get In Touch
          </button>
        </div>
      )}
    </header>
 
    
}


export default Header ;
