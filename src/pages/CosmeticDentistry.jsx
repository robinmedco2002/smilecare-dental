// src/pages/CosmeticDentistry.jsx
import { FaSmileBeam, FaTooth, FaGrinStars } from "react-icons/fa";

const CosmeticDentistry = () => {
  return (
    <div className="mt-6">
      {/* Banner Section */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588776814546-63a6b19d6e2a?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Cosmetic Dentistry
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Transform Your Smile, Boost Your Confidence
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Cosmetic dentistry focuses on enhancing the appearance of your teeth, gums, 
          and overall smile. From subtle changes to major transformations, our advanced 
          techniques and personalized care will give you the smile you’ve always dreamed of.
        </p>
      </div>

      {/* Service Highlights */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaSmileBeam className="text-pink-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Teeth Whitening</h3>
          <p className="text-gray-600 text-sm">
            Brighten your smile with safe, effective, and long-lasting whitening treatments.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaTooth className="text-pink-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Porcelain Veneers</h3>
          <p className="text-gray-600 text-sm">
            Thin, custom-made shells that cover imperfections for a perfect, natural-looking smile.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaGrinStars className="text-pink-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Smile Makeover</h3>
          <p className="text-gray-600 text-sm">
            A personalized combination of cosmetic treatments to completely transform your smile.
          </p>
        </div>
      </div>

      {/* Extra Content Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Choose Cosmetic Dentistry?</h3>
            <p className="text-gray-600 leading-relaxed">
              A beautiful smile isn’t just about looks — it boosts your self-esteem, makes a great 
              first impression, and can even improve your oral health. Our cosmetic treatments are 
              designed to be safe, effective, and customized to your unique needs.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Improve the color, shape, and alignment of your teeth</li>
              <li>Boost confidence in social and professional settings</li>
              <li>Achieve natural-looking, long-lasting results</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1629909612750-015a4a7c2c79?auto=format&fit=crop&w=1470&q=80"
              alt="Cosmetic Dentistry"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticDentistry;
