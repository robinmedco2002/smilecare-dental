import React from "react";

const Appointment = () => {
  return (
    <section className="min-h-screen py-12 bg-gray-50">
       <title>Book a Dentist Appointment | SmileCare Dental</title>
      <meta name="description" content="Schedule your dental appointment online. Choose a date and time that works best for you and receive the best dental care in Delhi" />
      
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">Book an Appointment</h2>
        <form
          className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          action="https://formsubmit.co/YOUR_EMAIL_HERE" // <- Replace with your email
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="+91-1234567890"
            />
          </div>

         <input
  type="date"
  name="date"
  required
  min={new Date().toISOString().split("T")[0]} // ✅ This sets today's date as the minimum
  className="w-full border border-gray-300 rounded-md px-4 py-2"
/>


          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Describe your concern..."
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Submit Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
