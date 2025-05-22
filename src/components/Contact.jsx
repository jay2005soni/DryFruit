function Contact (){
    return(
        <>
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

        </>
    );
}
export default Contact ;