import React from 'react';
import LocalMap from './LocalMap';
 // replace with actual filename
import { motion } from 'framer-motion';
import Navbar from './Navbar';
function AboutPage() {
  return (
    <div>
    {/* <Navbar/> */}

      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 mt-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="src/assets/photogroup.png" alt="Thumbs Up" className="w-64 md:w-80 h-auto object-contain" />
        </div>
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us!</h2>
          <h3 className="text-xl font-semibold text-green-500">
            Partner With Pride Solutions Today And Take The First Step Towards A Brighter Future
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Pride Solutions, we empower individuals to reach their full potential with tailored job and academic solutions.
          </p>
          <button className="bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500">Join Now</button>
        </div>
      </section>

       <section className="px-6 md:px-24 py-12 bg-white text-gray-800 space-y-10">
      {/* Section 1 */}
      <div>
        <p className="text-lg md:text-xl font-medium">
          At Pride Solutions, we are committed to empowering individuals to reach their full potential by delivering tailored job and academic solutions. Whether you’re a student aiming for academic excellence or a professional seeking career growth, we provide the expertise, resources, and support to help you succeed.
        </p>
      </div>

      {/* Section 2 */}
      <div>
        <p className="text-lg md:text-xl font-medium">
          On the professional side, our job solutions are designed to help job seekers and professionals navigate the competitive job market. From resume building and interview preparation to career coaching and job placement, we equip individuals with the tools and strategies they need to secure meaningful employment and advance in their careers.
        </p>
      </div>

      {/* Section 3 */}
      <div>
        <p className="text-lg md:text-xl font-medium">
          Our academic solutions cover a wide range of services, including assignment assistance, personalized tutoring, research support, and skill development programs. We ensure that every student receives the guidance they need to excel in their studies, providing high-quality, customized solutions that meet the specific needs of each individual.
        </p>
      </div>

      {/* Section 4 */}
      <div>
        <p className="text-lg md:text-xl font-medium">
          At Pride Solutions, we understand that success is a combination of knowledge, skills, and the right opportunities. Our mission is to be your trusted partner, whether you’re looking to achieve your academic goals or unlock new career opportunities. With a team of experts dedicated to your success, we’re here to help you navigate both your educational and professional journey with confidence.
        </p>
      </div>
    </section>

     <section className="bg-[#f1fdfb] py-12 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left content */}
        <div className="space-y-10">
          {/* Who We Are */}
          <div>
            <span className="inline-block bg-green-500 text-white px-5 py-1 rounded-full text-sm font-semibold mb-3">
              Who We Are
            </span>
            <p className="text-gray-900 text-lg font-medium">
              At Pride Solutions, we are more than just a service provider – we are your dedicated partner in both your academic and professional journey. With a deep commitment to empowering individuals, we deliver tailored solutions designed to unlock your full potential.
            </p>
          </div>

          {/* Our Values */}
          <div>
            <span className="inline-block bg-green-500 text-white px-5 py-1 rounded-full text-sm font-semibold mb-3">
              Our Values
            </span>
            <p className="text-gray-900 text-lg font-medium">
              At Pride Solutions, we are more than just a service provider – we are your dedicated partner in both your academic and professional journey. With a deep commitment to empowering individuals, we deliver tailored solutions designed to unlock your full potential.
            </p>
          </div>
        </div>

        {/* Right image */}
        <div>
          <img
            src="src/assets/group.png"
            alt="Team working together"
            className="rounded-2xl shadow-md object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>

     <section className="py-16 px-6 md:px-24 bg-white text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Our <span className="text-green-500">Approach</span>
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-800 max-w-3xl mx-auto">
        At Pride Solutions, we understand that every person’s journey is unique. That’s why we work closely with you to understand your goals and challenges, crafting solutions that are specifically designed to support your growth. Our team of experts brings years of experience to the table, helping you navigate both the academic and job markets with confidence and clarity.
      </p>
    </section>
<section className="max-w-7xl mx-auto px-6 md:px-20 mt-12">
    <h2 className="text-center text-3xl font-bold mb-10 text-gray-900">Why Choose Us!</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {["Integrity", "Expertise", "Reliability", "Innovation"].map((title, i) => (
        <motion.div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3, duration: 0.6 }}
        >
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-500 font-bold text-xl">
            {title.charAt(0)}
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
      ))}
    </div>
  </section>
  <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-12 bg-white">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            You Will Grow, You Will Succeed. <br />We Promise That
          </h2>
          <p className="text-gray-600">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt.
          </p>

          <div className="space-y-4 text-gray-800 text-sm">
            <div className="flex items-center space-x-3">
              <span>📞</span>
              <p><strong>Call</strong><br />+9999999</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>📧</span>
              <p><strong>Email</strong><br />abc@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>⏰</span>
              <p><strong>Hours</strong><br />Mon - Fri: 10AM - 10PM</p>
            </div>
            <div className="flex items-center space-x-3">
              <span>📍</span>
              <p><strong>Location</strong><br />Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Contact Info</h3>
          <p className="text-sm text-gray-600 mb-6">Nibh dis faucibus proin lacus tristique</p>

          <form action="https://docs.google.com/forms/d/e/1FAIpQLSfYCV6hVrkJz_7HfwGne9Tj87qtgbVS_o0GV-BZszud8cdeSw/viewform?usp=header" method="POST" target="_blank">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input name="entry.1111111111" type="text" placeholder="Your name" className="p-2 border border-gray-300 rounded" required />
              <input name="entry.2222222222" type="text" placeholder="Your last name" className="p-2 border border-gray-300 rounded" />
            </div>
            <input name="entry.3333333333" type="email" placeholder="Your E-mail" className="p-2 w-full border border-gray-300 rounded mb-4" required />
            <textarea name="entry.4444444444" placeholder="Your message..." rows="4" className="p-2 w-full border border-gray-300 rounded mb-4" required></textarea>
            <button type="submit" className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <LocalMap />
      <footer class="bg-green-50 text-gray-800 px-6 py-10">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    {/* <!-- Logo + Description --> */}
    <div>
      <div class="flex items-center gap-2 mb-4">
        <img src="src/assets/logo.png" alt="Logo" class="w-25 h-20" />
       
      </div>
      <p class="text-sm">
        Quis enim pellentesque viverra tellus eget malesuada facilisis. Congue nibh vivamus aliquet nunc mauris d...
      </p>
    </div>

    {/* <!-- Company Links --> */}
    <div>
      <h3 class="font-bold mb-3">Company</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Reffral</a></li>
        <li><a href="#">Contact Us</a></li>
        {/* <li><a href="#">For Employers</a></li> */}
      </ul>
    </div>

    {/* <!-- Job Categories --> */}
    {/* <div>
      <h3 class="font-bold mb-3">Job Categories</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#">Telecommunications</a></li>
        <li><a href="#">Hotels & Tourism</a></li>
        <li><a href="#">Construction</a></li>
        <li><a href="#">Education</a></li>
        <li><a href="#">Financial Services</a></li>
      </ul>
    </div> */}
<span></span>
    {/* <!-- Newsletter --> */}
    <div>
      <h3 class="font-bold mb-3">Newsletter</h3>
      <p class="text-sm mb-3">Eu nunc pretium vitae platea. Non netus elementum vulputate</p>
      <input type="email" placeholder="Email Address" class="w-full px-3 py-2 border rounded mb-3 text-sm" />
      <button class="bg-green-500 text-white px-4 py-2 rounded w-full font-semibold text-sm">
        Subscribe now
      </button>
    </div>
  </div>

  {/* <!-- Bottom Bar --> */}
  <div class="mt-10 border-t pt-4 text-sm flex flex-col md:flex-row items-center justify-between text-gray-500">
    <p>© Copyright Jaykishan Soni</p>
    <div class="flex gap-4 mt-2 md:mt-0">
      <a href="#" class="hover:text-gray-800">Privacy Policy</a>
      <a href="#" class="hover:text-gray-800">Terms & Conditions</a>
    </div>
  </div>
</footer>
    </div>
  );
}

export default AboutPage;
