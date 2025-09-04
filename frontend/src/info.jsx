// Info.jsx
import React from 'react';
import Header from './components/Header.jsx';

function Info() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="px-8 md:px-16 py-16 bg-gray-50 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            All You Need to Know<br /> About Our Solutions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our info page covers comprehensive details about our technology solutions, their benefits, and how they can cater to your specific industry requirements. We combine innovation with reliability to empower your business growth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From consulting and strategy to implementation and support, we provide a full suite of services tailored to your needs. Explore how we can help you streamline operations, enhance user experience, and drive results.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex items-center justify-center">
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 italic">Info Page Image Placeholder</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;
