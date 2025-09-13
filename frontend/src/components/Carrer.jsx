import React from "react";
import careerBanner from "../assets/bulk-order.jpg"; // replace with actual path
import Footer from "./Footer";

const Career = () => {
  return (
    <div className="pt-4">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80">
        <img
          src={careerBanner}
          alt="Career Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Career</h1>
          <div className="text-white mt-2 space-x-2 text-lg">
            <span>Home</span>
            <span>—</span>
            <span>Jobs</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-[#6d0019] mb-4">
          Want to be the part of Dry Fruit House team?
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          We are a dynamic and forward-thinking organisation
        </h1>
        <p className="text-gray-700 mb-4">
          Join us as we revolutionize the world of dry fruits industry and shape the future.
        </p>
        <p className="text-gray-700 mb-4">
          As a team member, you will have the chance to work and collaborate with talented professionals and handle exciting challenges. We offer a supportive environment and empower employees to unleash their full potential.
        </p>
        <p className="text-gray-700">
          So are you ready to embark on a rewarding journey with Dry Fruit House? Then share your resume at{" "}
          <a href="mailto:hr@dryfruithouse.com" className="text-[#6d0019] font-semibold">
            hr@dryfruithouse.com
          </a>
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Career;
