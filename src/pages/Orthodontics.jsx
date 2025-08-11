// src/pages/Orthodontics.jsx
import { FaTeethOpen, FaTooth, FaSmile } from "react-icons/fa";

const Orthodontics = () => {
  return (
    <div className="mt-6">
       <title>Orthodontic Treatments | Braces & Aligners at SmileCare Dental Clinic</title>
      <meta name="description" content="Straighten your teeth with expert orthodontic treatments at SmileCare Dental Clinic. We offer metal braces, ceramic braces, and invisible aligners for all ages." />

      {/* Banner Section */}
      <div
        className="relative h-64 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/smilecare-dental/images/orthodontic_header.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Orthodontics
          </h1>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Straighten Your Smile, Enhance Your Health
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Orthodontics focuses on diagnosing, preventing, and correcting
          misaligned teeth and jaws. Whether you want traditional braces or
          clear aligners, our personalized treatment plans ensure comfort,
          efficiency, and beautiful results.
        </p>
      </div>

      {/* Service Highlights */}
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaTeethOpen className="text-blue-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Traditional Braces</h3>
          <p className="text-gray-600 text-sm">
            Highly effective for all ages, traditional braces correct even the
            most complex alignment issues.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaSmile className="text-blue-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Invisalign</h3>
          <p className="text-gray-600 text-sm">
            Nearly invisible aligners that straighten your teeth comfortably
            without metal wires or brackets.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
          <FaTooth className="text-blue-500 text-5xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Retainers</h3>
          <p className="text-gray-600 text-sm">
            Maintain your new smile after orthodontic treatment with custom-fit
            retainers.
          </p>
        </div>
      </div>

      {/* Extra Content Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              The Benefits of Orthodontic Treatment
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Orthodontics not only improves your smile but also enhances your
              oral health. Straight teeth are easier to clean, reducing the risk
              of cavities and gum disease, and a properly aligned bite can
              prevent jaw pain and uneven tooth wear.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Improved appearance and self-confidence</li>
              <li>Better oral hygiene and easier cleaning</li>
              <li>Balanced bite and reduced jaw strain</li>
            </ul>
          </div>
          <div>
            <img
              src="/smilecare-dental/images/orthodontic.jpg"
              alt="Orthodontics"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orthodontics;
