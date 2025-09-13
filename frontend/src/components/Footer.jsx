import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bg-[url('/path-to-your-background-image.png')] bg-repeat rounded-t-md px-8 py-8 max-w-full">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-gray-700 text-sm">
        {/* Left Section */}
        <div className="w-full sm:w-1/4 mb-6 sm:mb-0">
          <img
            src="/path-to-your-logo.png"
            alt="Dry Fruit House Logo"
            className="w-36 mb-3"
          />
          <p className="mb-4 leading-relaxed text-gray-600">
            Dry Fruit House brings you a collection of carefully selected foods from India and across the world.{" "}
            <span className="text-[#6d0019] cursor-pointer">[Explore More]</span>
          </p>
          <div className="flex space-x-4 text-[#6d0019] text-lg">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> {/* Or SVG icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.41c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.466.099 2.798.142v3.245h-1.92c-1.504 0-1.795.716-1.795 1.764v2.312h3.588l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.936 4.936 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.373 4.482A13.941 13.941 0 011.671 3.149a4.916 4.916 0 001.523 6.557 4.902 4.902 0 01-2.228-.616v.061a4.915 4.915 0 003.946 4.814 4.922 4.922 0 01-2.224.084 4.917 4.917 0 004.588 3.417 9.867 9.867 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.945 13.945 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21-.004-.423-.015-.633A9.935 9.935 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.533.442 3.414 1.561 2.294 2.681 1.983 3.923 1.925 5.2.865 8.332 0 12 0 12s.865 3.668 1.925 6.8c.058 1.277.369 2.519 1.489 3.639 1.12 1.12 2.362 1.432 3.639 1.489 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.058 2.519-.369 3.639-1.489 1.12-1.12 1.432-2.362 1.489-3.639.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.058-1.277-.369-2.519-1.489-3.639C19.519.442 18.277.13 17 .072 15.719.013 15.309 0 12 0z" />
                <circle cx="12" cy="12" r="3.6" />
              </svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.27 6h4.43v14H.27zM8 6h4.21v2h.06c.59-1.12 2.03-2 4.18-2 4.47 0 5.3 2.94 5.3 6.76V20h-4.43v-6.58c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.7-2.53 3.45V20H8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="cursor-pointer hover:text-[#6d0019]">About Us</li>
            <li className="cursor-pointer hover:text-[#6d0019]">Contact Us</li>
            <li className="cursor-pointer hover:text-[#6d0019]">Bulk Ordering</li>
            <li className="cursor-pointer hover:text-[#6d0019]">Shopping</li>
          </ul>
        </div>

        {/* Account Info */}
        <div className="w-full sm:w-1/6 mb-6 sm:mb-0">
          <h3 className="font-semibold mb-4 text-lg">Account Info</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="cursor-pointer hover:text-[#6d0019]">My Account</li>
            <li className="cursor-pointer hover:text-[#6d0019]">Privacy Policy</li>
            <li className="cursor-pointer hover:text-[#6d0019]">Return Policy</li>
            <li className="cursor-pointer hover:text-[#6d0019]">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="w-full sm:w-1/4">
          <h3 className="font-semibold mb-4 text-lg">Contact Details</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start space-x-3">
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H9v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9z" />
              </svg>
              <p className="text-sm font-semibold">
                NR TOWERS, 17th Cross, Sector 4, 19th Main Rd, HSR Layout, Bengaluru - 560102
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M22 6l-10 7L2 6" fill="none" stroke="black" strokeWidth="2"/>
              </svg>
              <p className="text-sm font-semibold">info@dryfruithouse.com</p>
            </div>

            <div className="flex items-center space-x-3">
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="none"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.2.38 2.37.73 3.5a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.58-1.58a2 2 0 0 1 2.11-.45c1.13.35 2.3.6 3.5.73a2 2 0 0 1 1.72 2z" />
              </svg>
              <p className="text-sm font-semibold">+91-7483600212</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mt-8 pt-6 text-xs text-gray-600 text-center">
        Copyright © 2025 <span className="font-semibold cursor-pointer">Dry Fruit House</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
