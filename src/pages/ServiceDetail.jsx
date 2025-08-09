// src/pages/GeneralDentistry.jsx
import { FaTooth, FaTeeth, FaUserMd } from "react-icons/fa";

const GeneralDentistry = () => {
  return (
    <div className="mt-6">
      {/* Banner Section */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1629909612844-61a93b229c8d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            General Dentistry
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Comprehensive Care for Your Smile
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Our general dentistry services are the foundation of good oral health. From routine check-ups to preventive treatments, 
          we focus on maintaining healthy teeth and gums for a lifetime. Regular visits to our dental experts help in early detection 
          and prevention of dental problems, ensuring a bright and healthy smile.
        </p>
      </div>

      {/* Services Highlights */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaUserMd className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Routine Checkups</h3>
          <p className="text-gray-600 text-sm">
            Regular dental examinations to identify potential problems early and keep your mouth healthy.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaTooth className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Dental Fillings</h3>
          <p className="text-gray-600 text-sm">
            Quick and effective treatment for cavities to restore tooth function and prevent further decay.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaTeeth className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Gum Care</h3>
          <p className="text-gray-600 text-sm">
            Comprehensive periodontal care to prevent gum disease and maintain oral hygiene.
          </p>
        </div>
      </div>

      {/* Extra Content Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why General Dentistry Matters</h3>
            <p className="text-gray-600 leading-relaxed">
              General dentistry forms the backbone of a healthy mouth. It’s about more than just treating problems —
              it’s about preventing them from happening in the first place. With regular visits, we can catch issues early,
              saving you time, money, and discomfort in the long run.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Early detection of dental problems</li>
              <li>Professional cleaning to remove plaque & tartar</li>
              <li>Preventive advice tailored to your needs</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1629909612794-67a9c97e8e10?auto=format&fit=crop&w=1470&q=80"
              alt="General Dentistry"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDentistry;
