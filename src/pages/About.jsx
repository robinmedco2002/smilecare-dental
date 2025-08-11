import React from "react";
import { Link } from "react-router-dom";
import aboutImg1 from "../assets/about1.jpg";
import aboutImg2 from "../assets/about2.jpg";
import aboutImg3 from "../assets/about3.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const About = () => {
  return (
    <>
     <title>About | SmileCare Dental</title>
      <meta name="description" content="About SmileCare Dental Clinic..." />
      
    <section className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-6">About SmileCare Dental</h2>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Our Mission</h3>
          <p className="text-gray-700">
            At SmileCare Dental, our mission is to provide exceptional dental care in a
            comfortable and welcoming environment. We combine advanced technology with
            compassionate service to ensure the best experience for every patient.
          </p>
          <p className="text-gray-700">
            Our dedicated team of professionals is committed to improving your dental
            health while enhancing the beauty of your smile.
          </p>
        </div>
        <img
          src={aboutImg1}
          alt="Our Mission"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Technology Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src={aboutImg2}
          alt="Advanced Technology"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Advanced Technology</h3>
          <p className="text-gray-700">
            We utilize cutting-edge equipment and techniques to provide accurate diagnoses
            and pain-free treatments. From digital X-rays to laser dentistry, our
            technology enhances your comfort and treatment outcomes.
          </p>
        </div>
      </div>

      {/* Environment Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-blue-600">Friendly Environment</h3>
          <p className="text-gray-700">
            Our clinic is designed with your comfort in mind. We maintain a clean,
            relaxing, and friendly atmosphere where patients of all ages feel at ease.
          </p>
        </div>
        <img
          src={aboutImg3}
          alt="Friendly Environment"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Highlights Section */}
      <div className="my-16">
        <h3 className="text-2xl font-semibold text-blue-600 text-center mb-6">
          Why Choose SmileCare Dental?
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {[
            { title: "20+ Years of Experience", icon: "🦷" },
            { title: "Modern Equipment", icon: "🛠️" },
            { title: "Family Friendly", icon: "👨‍👩‍👧‍👦" },
            { title: "Emergency Care", icon: "🚑" },
            { title: "Certified Doctors", icon: "🎓" },
            { title: "Affordable Pricing", icon: "💰" }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="my-16">
        <h3 className="text-2xl font-semibold text-blue-600 text-center mb-6">
          Meet Our Experts
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[team1, team2, team3].map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Team Member ${index + 1}`}
                className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">Dr. John Doe</h4>
              <p className="text-sm text-gray-500">Senior Dentist</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-10 text-center rounded-xl mt-16">
        <h3 className="text-2xl font-semibold mb-2">Ready to Transform Your Smile?</h3>
        <p className="mb-4">Book your consultation today and take the first step.</p>
        <Link
  to="/contact"
  className="inline-block bg-white text-blue-600 font-medium px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
>
  Contact Us
</Link>
      </div>
    </section>
    </>
  );
};

export default About;
