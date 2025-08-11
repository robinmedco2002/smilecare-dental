// src/pages/EmergencyCare.jsx
import { FaTooth, FaHeartbeat, FaAmbulance } from "react-icons/fa";

const EmergencyCare = () => {
  return (
    <div className="mt-6">
      <title>24/7 Emergency Dental Care in Delhi | Urgent Tooth Pain & Injury</title>
      <meta name="description" content="Get fast, professional emergency dental care for tooth pain, broken teeth, or oral injuries. Our team is here 24/7 to relieve pain and restore your smile quickly." />

      {/* Banner Section */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/smilecare-dental/images/emergency_care_header.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Emergency Care
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Immediate Help When You Need It Most
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Dental emergencies can happen anytime — from sudden pain to injuries.
          Our skilled team is here to provide prompt, compassionate care to
          relieve discomfort, prevent further damage, and restore your oral
          health as quickly as possible.
        </p>
      </div>

      {/* Service Highlights */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaHeartbeat className="text-red-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Severe Toothache</h3>
          <p className="text-gray-600 text-sm">
            Immediate diagnosis and treatment to relieve pain and address the
            root cause.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaTooth className="text-red-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Broken or Chipped Tooth</h3>
          <p className="text-gray-600 text-sm">
            Fast restoration to protect the tooth and maintain your smile.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaAmbulance className="text-red-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Knocked-Out Tooth</h3>
          <p className="text-gray-600 text-sm">
            Quick action can save your tooth — call us immediately for
            instructions and urgent care.
          </p>
        </div>
      </div>

      {/* Extra Content Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Why Choose Us for Emergency Care?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We prioritize dental emergencies and strive to see you as soon as
              possible. Our modern facilities and expert team ensure your
              comfort and safety during urgent situations.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Same-day appointments for emergencies</li>
              <li>24/7 phone assistance for urgent cases</li>
              <li>Comprehensive treatment in one location</li>
              <li>Gentle care with patient comfort in mind</li>
            </ul>
          </div>
          <div>
            <img
              src="/smilecare-dental/images/emergency_care_img.jpg"
              alt="Emergency Dental Care"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyCare;
