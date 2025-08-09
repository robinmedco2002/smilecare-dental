import HeroSlider from "../components/HeroSlider";
import { FaCheckCircle } from "react-icons/fa";

import ServicesPreview from "../components/ServicesPreview"; // if you have separate component
// import ClinicIntro from "../components/ClinicIntro"; // image+text intro
// import FeatureHighlights from "../components/FeatureHighlights";
// import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
// import VideoIntro from "../components/VideoIntro";
import NewsletterSignup from "../components/NewsletterSignup";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "./Testimonials";
import DentalCareTips from "../components/dentalCareTips";







const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSlider />
       {/* Welcome / Intro */}
     <section className="py-16 px-4 sm:px-8 bg-gray-50 text-gray-800">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Welcome to SmileCare Dental Clinic</h2>
            <p className="mb-6">
              At SmileCare, we combine expertise with compassion. From routine checkups to advanced cosmetic procedures,
              our team ensures you receive personalized, pain-free dental care in a comfortable environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white p-3 rounded shadow">
                <FaCheckCircle className="text-green-500" />
                <span>Experienced Dentists</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded shadow">
                <FaCheckCircle className="text-green-500" />
                <span>Modern Equipment</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded shadow">
                <FaCheckCircle className="text-green-500" />
                <span>Pain-Free Treatments</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/home-clinic.jpg"
              alt="Clinic interior"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

{/* Services Preview */} 

<ServicesPreview />

{/* Why Choose Us */}

<WhyChooseUs />
     

      {/* Testimonials Preview */}
    <Testimonials /> 
    

     
       {/* Call to Action */}
      <section className="py-16 px-4 sm:px-8 bg-blue-600 text-white">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Ready for a Brighter Smile?</h2>
            <p className="mb-4">
              Book your appointment today and get personalized dental care from our experts.
            </p>
          </div>
          <div className="flex-1 text-center">
            <a href="/appointment"  className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded shadow hover:shadow-md transition"
            > Schedule Now </a>
          </div>
        </div>
      </section>

 {/* Blog / Tips Teaser */}
    
<DentalCareTips /> 
<Gallery />
<NewsletterSignup />
     
    </div>
  );
};

export default Home;
