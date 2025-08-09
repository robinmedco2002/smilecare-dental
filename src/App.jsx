import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

// Import Pages (You’ll create these soon)
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Appointment from "./pages/Appointment";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import CosmeticDentistry from "./pages/CosmeticDentistry";
import Orthodontics from "./pages/Orthodontics";
import EmergencyCare from "./pages/EmergencyCare";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import Gallery from "./components/Gallery";
import GalleryPage from "./pages/Gallery"; 

function App() {
   useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      offset: 100, // Offset from trigger point
      once: true, // Animate only once
      easing: "ease-in-out",
    });
  }, []);
  
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* padding to avoid content under navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/general" element={<ServiceDetail />} />
          <Route path="/services/cosmeticDentistry" element={<CosmeticDentistry />} />
          <Route path="/services/orthodontics" element={<Orthodontics />} />
          <Route path="/services/emergency" element={<EmergencyCare />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
<Route path="/gallery" element={<GalleryPage />} />       
        </Routes>
      </div>
     
       <Footer />
    </Router>
  );
}

export default App;
