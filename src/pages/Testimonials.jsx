import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Anita Sharma",
    location: "Delhi",
    image: "/smilecare-dental/images/patient1.jpg",
    rating: 5,
    review: "Very professional and caring staff. My root canal was painless. Highly recommended!",
  },
  {
    name: "Rahul Verma",
    location: "Mumbai",
    image: "/smilecare-dental/images/patient2.jpg",
    rating: 5,
    review: "The best dental care I've ever experienced. Friendly doctors and clean clinic.",
  },
  {
    name: "Priya Desai",
    location: "Ahmedabad",
    image: "/smilecare-dental/images/patient3.jpg",
    rating: 4,
    review: "Excellent service and great results. My smile has never looked better!",
  },
  {
    name: "Karan Mehta",
    location: "Pune",
    image: "/smilecare-dental/images/patient4.jpg",
    rating: 5,
    review: "Modern facilities, skilled dentists, and no waiting time. Highly satisfied!",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    image: "/smilecare-dental/images/patient5.jpg",
    rating: 5,
    review: "They made my daughter feel comfortable during her braces treatment. Thank you!",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
       <title>Patient Testimonials | SmileCare Dental Clinic</title>
      <meta name="description" content="Read real patient reviews and success stories at SmileCare Dental Clinic. See how we’ve transformed smiles and built trust through exceptional dental care." />

      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Patients Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-10" // ensures space for dots
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="m-3 p-6 bg-white rounded-xl shadow-md border-t-4 border-blue-600 h-full flex flex-col justify-between">
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  “{item.review}”
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-blue-600 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.location}</p>
                    <div className="flex text-yellow-400 text-sm mt-1">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination container (placed manually if needed) */}
        <div className="swiper-pagination mt-6 text-center"></div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
