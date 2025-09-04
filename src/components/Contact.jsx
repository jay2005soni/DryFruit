import React from "react";
import contactBanner from "../assets/bulk-order.jpg"; // Replace with your actual image path
import Footer from "./Footer";

function Contact() {
  return (
    <div className="pt-4">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80">
        <img
          src={contactBanner}
          alt="Contact Us Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Contact Us</h1>
          <div className="text-white mt-2 space-x-2 text-lg">
            <span>Home</span>
            <span>—</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
        <p className="text-gray-700 mb-10">
          We are here to help our customers all over the world. We would be happy to assist you.
          Let us know what your queries are or what you are looking for — we’ll get back to you shortly.
        </p>

        {/* Form + Contact Info */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side - Info Box */}
         <div className="bg-[#4d0000] text-white p-10 rounded-xl space-y-8">
  {/* Contact Us */}
  <div>
    <h3 className="text-xl font-bold mb-2">Contact Us</h3>
    <div className="flex items-start space-x-4">
      <i className="fas fa-phone-alt text-2xl mt-1"></i>
      <div>
        <p>Reach us on call/whatsapp</p>
        <p className="font-medium">+91-7483600212</p>
      </div>
    </div>
  </div>

  {/* Email Address */}
  <div>
    <h3 className="text-xl font-bold mb-2">Email Address</h3>
    <div className="flex items-start space-x-4">
      <i className="fas fa-envelope text-2xl mt-1"></i>
      <div>
        <p className="font-medium">info@dryfruithouse.com</p>
      </div>
    </div>
  </div>

  {/* Office Location */}
  <div>
    <h3 className="text-xl font-bold mb-2">Office Location</h3>
    <div className="flex items-start space-x-4">
      <i className="fas fa-university text-2xl mt-1"></i>
      <div>
        <p>
          NR Tower, 17th Cross, Sector 4, 19th Main Road, <br />
          HSR Layout, Bengaluru, Karnataka 560102
        </p>
      </div>
    </div>
  </div>

  {/* Follow Us */}
  <div>
    <h3 className="text-xl font-bold mb-3">Follow Us</h3>
    <div className="flex space-x-4 text-white text-2xl">
      <a href="#"><i className="fab fa-facebook rounded-full bg-white text-[#4d0000] p-2"></i></a>
      <a href="#"><i className="fab fa-twitter rounded-full bg-white text-[#4d0000] p-2"></i></a>
      <a href="#"><i className="fab fa-linkedin rounded-full bg-white text-[#4d0000] p-2"></i></a>
      <a href="#"><i className="fab fa-instagram rounded-full bg-white text-[#4d0000] p-2"></i></a>
    </div>
  </div>
</div>


          {/* Right Side - Form */}
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
              <div className="mb-6">
                <label className="block font-medium text-gray-700 mb-1">Message *</label>
                <textarea
                  rows="5"
                  placeholder="Your message..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6d0019]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4d0000] hover:bg-[#330000] text-white py-3 text-lg font-semibold rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* You can add FAQs or Trust Badges here if needed */}

      <Footer />
    </div>
  );
}

export default Contact;
