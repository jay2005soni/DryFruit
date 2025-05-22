import { Route, Routes } from 'react-router-dom';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import ReferralPage from './components/ReferralPage';
import AboutPage from './components/AboutPage';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
// Images
import banner from './assets/Banner.png';
import img1 from './assets/img1.png';
import checkimg2 from './assets/checkimg2.png';
import logo from './assets/logo.png';
import photogroup from './assets/photogroup.png';

// Sample reviews data
// const reviews = [
//   {
//     avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
//     name: 'Jane Doe',
//     date: 'March 2025',
//     rating: 5,
//     text: 'Great service and support. Highly recommended!',
//   },
//   {
//     avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
//     name: 'John Smith',
//     date: 'April 2025',
//     rating: 4,
//     text: 'Very helpful and professional team.',
//   },
//   {
//     avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
//     name: 'Alice Johnson',
//     date: 'May 2025',
//     rating: 5,
//     text: 'Found my dream job with their help!',
//   },
//   {
//     avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
//     name: 'Bob Williams',
//     date: 'April 2025',
//     rating: 4,
//     text: 'Good academic guidance and career advice.',
//   },
// ];

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      {/* <HomePage /> */}
      <Routes>
        <Route path="/home"        element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      

      {/* Footer */}
      <footer className="bg-green-50 text-gray-800 px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-25 h-10" />
              {/* <h3 className="text-lg font-bold">Pride Solutions</h3> */}
            </div>
            <p className="text-sm text-gray-600">Empowering your journey to success through career and academic excellence.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Referral</li>
              <li>Services</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm">📍 Jaipur, Rajasthan<br />📧 abc@gmail.com<br />📞 +9999999</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-8">© {new Date().getFullYear()} Own Solutions. All rights reserved 
          jaykishan.</p>
      </footer>
    </div>
  );
}

export default App;
