import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const services = [
  {
    id: 1,
    title: "Teeth Whitening",
    description: "Brighten your smile with safe and effective whitening treatments.",
    image: "/images/service1.jpg",
  },
  {
    id: 2,
    title: "Braces & Aligners",
    description: "Correct alignment with modern braces and invisible aligners.",
    image: "/images/service2.jpg",
  },
  {
    id: 3,
    title: "Root Canal",
    description: "Pain-free root canal therapy with latest technology.",
    image: "/images/service3.jpg",
  },
  {
    id: 4,
    title: "Dental Implants",
    description: "Permanent tooth replacement that looks and feels natural.",
    image: "/images/service4.jpg",
  },
];



const ServicesPreview = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-white text-gray-800">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Our Top Services</h2>
            <a
              href="/services"
              className="text-blue-600 font-medium hover:underline"
            >
              View All Services →
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <ServiceCard
                key={s.id}
                id={s.id}
                title={s.title}
                description={s.description}
                image={s.image}
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default ServicesPreview;
