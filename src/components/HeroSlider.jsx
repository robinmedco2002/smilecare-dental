import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "./images/hero1.jpg",
    heading: "Your Smile, Our Passion",
    subtext: "Providing advanced dental care with a personal touch.",
  },
  {
    image: "/images/hero2.jpg",
    heading: "Bright Smiles, Healthy Lives",
    subtext: "Experience modern dentistry with comfort and care.",
  },
  {
    image: "/images/hero3.jpg",
    heading: "Confidence Starts with a Smile",
    subtext: "Achieve your perfect smile with our expert team.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] overflow-hidden w-full">
      
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
              {slides[current].heading}
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              {slides[current].subtext}
            </p>
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlider;
