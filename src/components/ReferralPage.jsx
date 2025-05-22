import React from 'react';
import { FaStar, FaTrophy } from 'react-icons/fa';

const ReferralPage = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-green-800 to-green-300 rounded-lg p-6 flex items-center justify-between max-w-7.5xl mx-auto shadow-lg">
      {/* Left Section */}
      <div className="space-y-3 max-w-md">
        <h2 className="text-3xl font-bold text-white">Unlock More Space</h2>
        <p className="text-white text-lg">with Shooty's Referral Program!</p>
        <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded-full hover:bg-green-100">
          Invite Friends
        </button>
        <div className="flex items-center space-x-2 mt-2">
          <div className="flex text-yellow-400">
            {Array(5).fill().map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="text-white font-semibold">4.9</span>
          <FaTrophy className="text-yellow-300 ml-1" />
        </div>
      </div>

      {/* Right Section - Placeholder for illustration */}
      <div className="hidden md:block">
        <img
          src="src/assets/vector.png"
          alt="Referral Illustration"
          className="h-48"
        />
      </div>
      
    </div>
    <section className="py-16 px-4 bg-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-12">
    How it <span className="text-green-500">works</span>
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
    <div className="flex flex-col items-center space-y-6 px-4">
      <img src="src\assets\vc1.png" alt="Share Code" className="w-36 h-36" />
      <p className="bg-green-500 text-white text-sm md:text-base px-4 py-3 rounded-md max-w-xs shadow">
        User shares their unique referral code.
      </p>
    </div>

    <div className="flex flex-col items-center space-y-6 px-4">
      <img src="src\assets\vc2.png" alt="Friend Signup" className="w-36 h-36" />
      <p className="bg-green-500 text-white text-sm md:text-base px-4 py-3 rounded-md max-w-xs shadow">
        Referred friend signs up using the code.
      </p>
    </div>

    <div className="flex flex-col items-center space-y-6 px-4">
      <img src="src\assets\vc3.png" alt="Earn Storage" className="w-36 h-36" />
      <p className="bg-green-500 text-white text-sm md:text-base px-4 py-3 rounded-md max-w-xs shadow">
        Both users receive 5GB of extra storage.
      </p>
    </div>
  </div>
</section>
<section className="bg-gradient-to-r from-indigo-50 via-white to-teal-50 py-16 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
    
    {/* Text Content */}
    <div className="md:w-1/2 space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Why Refer Your <span className="text-green-500">Friends?</span>
      </h2>
      <p className="text-gray-700 text-base md:text-lg">
        Refer a friend and both of you get 5GB of bonus storage space each! The more friends you invite, the more space you unlock!
      </p>
      <button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition">
        Refer a Friend
      </button>
    </div>

    {/* Testimonial Card */}
   <div
  className="w-full bg-cover bg-center bg-no-repeat py-10"
  style={{ backgroundImage: "url('src\assets\bg3.png')" }}
>
  <div className="md:w-1/2 mx-auto relative bg-white/70 p-6 rounded-xl shadow-lg">
    <div className="rounded-xl flex flex-col items-center">
      <img 
        src="src/assets/card.png" 
        alt="Testimonial" 
        className="w-40 h-40 object-cover rounded-lg mb-4"
      />
      <div className="text-sm text-gray-500 mb-1">Testimonial</div>
      <h3 className="text-lg font-semibold text-gray-800">Cecilia Pouros</h3>
      <p className="text-sm text-gray-600 mb-3">Satisfied Shooty Customer</p>
      <p className="text-center text-gray-700 italic text-sm">
        “I doubled my storage space by inviting friends to Shooty! It's so easy and rewarding!”
      </p>
      <div className="mt-4 flex space-x-1">
        {Array(5).fill().map((_, i) => (
          <svg key={i} className="w-5 h-5 text-orange-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L.489 6.91l6.562-.955L10 0l2.949 5.955 6.562.955-4.755 4.635 1.122 6.545z"/>
          </svg>
        ))}
      </div>
    </div>
  </div>


    </div>

  </div>
</section>

    </>
  );
};

export default ReferralPage;
