import { FaTeethOpen, FaTooth, FaSmile, FaUserMd, FaShieldAlt, FaHeartbeat } from "react-icons/fa";

const servicesData = [
  {
    title: "Teeth Whitening",
    description: "Brighten your smile with our safe and effective teeth whitening treatments.",
    image: "/smilecare-dental/images/teeth-whitening.jpg",
  },
  {
    title: "Braces & Aligners",
    description: "Straighten your teeth with modern, comfortable braces or clear aligners.",
    image: "/smilecare-dental/images/braces.jpg",
  },
  {
    title: "Root Canal",
    description: "Save your natural tooth with our painless root canal procedures.",
    image: "/smilecare-dental/images/root-canal.jpg",
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with durable and natural-looking dental implants.",
    image: "/smilecare-dental/images/dental-implants.jpg",
  },
];

const extraSections = [
  {
    icon: <FaUserMd className="text-blue-500 text-4xl" />,
    title: "Experienced Dentists",
    description: "Our team of skilled dentists ensures you get the highest quality dental care.",
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-4xl" />,
    title: "Safe & Hygienic",
    description: "We maintain the highest hygiene standards to ensure patient safety.",
  },
  {
    icon: <FaHeartbeat className="text-red-500 text-4xl" />,
    title: "Patient-Centered Care",
    description: "We focus on your comfort and tailor treatments to your needs.",
  },
];

export default function Services() {
  return (
    <div className="services-page">
       <title>Dental Services | Teeth Whitening, Braces, Implants & More</title>
      <meta name="description" content="Explore our range of dental services — from painless root canals to cosmetic dentistry. Get a healthy, confident smile with our expert team." />
      {/* Banner */}
      <div data-aos="fade-up"
        className="relative w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url('/smilecare-dental/images/services-banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Our Services</h1>
        </div>
      </div>

      {/* Intro Content */}
      <div className="max-w-5xl mx-auto py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Comprehensive Dental Care for Every Smile</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At SmileCare, we go beyond just treating dental problems — we focus on preventing them, 
          enhancing your smile, and making sure every visit is a pleasant one. Our state-of-the-art 
          clinic and friendly team are here to give you the best in modern dentistry.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you need a routine cleaning, advanced cosmetic treatment, or urgent dental care, 
          we offer a wide range of services tailored to meet your unique needs. Your smile is our priority, 
          and we make sure it shines brighter every day.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Content Sections */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 px-4">
          {extraSections.map((section, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">{section.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{section.title}</h4>
              <p className="text-gray-600">{section.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Our Clinic */}
      <div className="max-w-5xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose SmileCare?</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          At SmileCare, we believe in providing not just treatment, but a truly comforting and caring experience. 
          From preventive care to complex dental surgeries, our expert team uses the latest technology and best practices 
          to ensure you get the smile you deserve.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our commitment to excellence, combined with a welcoming atmosphere, has made us one of the most trusted dental clinics 
          in the region. Book your appointment today and experience the SmileCare difference!
        </p>
      </div>
    </div>
  );
}
