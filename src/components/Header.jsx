import { FaPhoneAlt, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

 function Header() {
  return (
    <div className="font-sans">
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
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-[#6d0019] cursor-pointer">Home</li>
          <li className="hover:text-[#6d0019] cursor-pointer">About Us</li>
          <li className="hover:text-[#6d0019] cursor-pointer">Shop</li>
          <li className="hover:text-[#6d0019] cursor-pointer">Bulk Order</li>
          <li className="hover:text-[#6d0019] cursor-pointer">Career</li>
          <li className="hover:text-[#6d0019] cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;