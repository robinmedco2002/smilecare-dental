import React from "react";

const Contact = () => {
  return (
    <section className="bg-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Map and Info */}
          <div className="space-y-6">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8562444376243!2d75.78824067530432!3d26.84669397672286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4fa050fcab3%3A0x56d8b7f5a2cd4177!2sDental%20Clinic!5e0!3m2!1sen!2sin!4v1693395533212!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-lg border"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Clinic Address</h3>
              <p className="text-gray-600">
                SmileCare Dental Clinic, <br />
                123 Dental Street, Near City Hospital, <br />
                Jaipur, Rajasthan – 302001
              </p>
            </div>

            <div className="text-gray-600">
              <p><strong>Phone:</strong> +91 9876543210</p>
              <p><strong>Email:</strong> contact@smilecaredental.in</p>
              <p><strong>Hours:</strong> Mon–Sat: 10am – 7pm</p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
