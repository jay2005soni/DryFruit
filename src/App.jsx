import { Route, Routes } from 'react-router-dom';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import React, { useState } from 'react';


import HomePage from './components/HomePage';


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
     
<HomePage />
    
     
    </div>
  );
}

export default App;
