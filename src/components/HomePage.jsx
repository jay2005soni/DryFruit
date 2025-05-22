import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Jane Doe',
    date: 'March 2025',
    rating: 5,
    text: 'Great service and support. Highly recommended!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Smith',
    date: 'April 2025',
    rating: 4,
    text: 'Very helpful and professional team.',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Alice Johnson',
    date: 'May 2025',
    rating: 5,
    text: 'Found my dream job with their help!',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Bob Williams',
    date: 'April 2025',
    rating: 4,
    text: 'Good academic guidance and career advice.',
  },
];
function HomePage(){
    {/* Banner */}
    return(
     <>
     <div className="w-full  h-100 bg-cover bg-center relative rounded-xl overflow-hidden" style={{ backgroundImage: `url('src/assets/Banner.png')` }}>
  {/* Overlay to darken image and blur right side */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-between p-6 md:p-12">
    {/* Left Section: Text */}
    <div className="text-white md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Create A Better Future For Yourself</h2>
      <p className="text-sm md:text-base text-gray-200 mb-6">
        At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scelerisque rhoncus...
      </p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-semibold">
        Know More
      </button>
    </div>

    {/* Optional Right Section for testimonial or image */}
    <div className="hidden md:block md:w-1/2">
      {/* Empty if you want a blur effect only on right */}
    </div>
  </div>
</div>


      {/* Headline */}
      <div className="text-center mt-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Your One Stop <span className="text-green-500">Destination</span> For Success
        </h2>
      </div>

      {/* Job Placement Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-20 px-6 md:px-32 gap-12 w-full max-w-7xl mx-auto">
        <div className="w-full md:w-1/2">
          <img src="src\assets\img1.png" alt="Job Placement Illustration" className="w-full h-auto" />
        </div>
        <div className="text-center md:text-left max-w-2xl space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Your Dream Job Placement</h1>
          <p className="text-gray-900 text-lg leading-relaxed">
            We Help You Discover Opportunities, Unlock Potential, <br />
            And Land The Job You’ve Always Dreamed Of.
          </p>
          <button className="bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500">Explore Now</button>
        </div>
      </section>

      {/* Academic Excellence Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 gap-8">
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Your Partner In Academic Excellence
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Empowering You With The Tools, Guidance, And <br />
            Support To Achieve Your Educational Goals.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="mt-4 bg-green-400 text-white px-6 py-2 rounded-full hover:bg-green-500">Learn More</button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="src\assets\checkimg2.png" alt="Academic Tools" className="w-64 md:w-80 h-auto object-contain" />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 mt-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="src\assets\photogroup.png" alt="Why Choose Us" className="w-64 md:w-80 h-auto object-contain" />
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

      {/* Achievements */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          OUR ACHIEVEMENTS
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { end: 500, label: "Assignment Done" },
            { end: 500, label: "Topics Covered" },
            { end: 100, label: "Skilled Professionals" },
            { end: 144, label: "Jobs Landed" }
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold text-black">
                <CountUp end={item.end} duration={2} enableScrollSpy />+
              </h3>
              <p className="mt-2 text-gray-800 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-16 gap-12 bg-white">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            You Will Grow, You Will Succeed. <br />We Promise That
          </h2>
          <p className="text-gray-600">
            Pellentesque arcu facilisis nunc mi proin. Dignissim mattis in lectus tincidunt.
          </p>
          <div className="space-y-4 text-gray-800 text-sm">
            <div className="flex items-center space-x-3"><span>📞</span><p><strong>Call</strong><br />+9999999</p></div>
            <div className="flex items-center space-x-3"><span>📧</span><p><strong>Email</strong><br />abc@gmail.com</p></div>
            <div className="flex items-center space-x-3"><span>⏰</span><p><strong>Hours</strong><br />Mon - Fri: 10AM - 10PM</p></div>
            <div className="flex items-center space-x-3"><span>📍</span><p><strong>Location</strong><br />Jaipur, Rajasthan</p></div>
          </div>
        </div>

        <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg w-full">
          <h3 className="text-xl font-bold mb-2 text-gray-900">Contact Info</h3>
          <p className="text-sm text-gray-600 mb-6">Nibh dis faucibus proin lacus tristique</p>
          <form action="https://docs.google.com/forms/d/e/1FAIpQLSfYCV6hVrkJz_7HfwGne9Tj87qtgbVS_o0GV-BZszud8cdeSw/viewform" method="POST" target="_blank">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" name="entry.1111111111" placeholder="Your name" className="p-2 border border-gray-300 rounded" required />
              <input type="text" name="entry.2222222222" placeholder="Your last name" className="p-2 border border-gray-300 rounded" />
            </div>
            <input type="email" name="entry.3333333333" placeholder="Your E-mail" className="p-2 w-full border border-gray-300 rounded mb-4" required />
            <textarea name="entry.4444444444" placeholder="Your message..." rows="4" className="p-2 w-full border border-gray-300 rounded mb-4" required></textarea>
            <button type="submit" className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">Send Message</button>
          </form>
        </div>
      </section>

      {/* Core Values */}
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
              <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Reviews</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex space-x-1 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
    )
}

export default HomePage ;