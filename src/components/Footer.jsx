import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Logo & About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">SmileCare Dental</h3>
          <p className="text-sm">
            Your trusted dental clinic for all your smile and oral health needs. We bring modern care with a personal touch.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/appointment" className="hover:text-white">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 - Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services/whitening" className="hover:text-white">Teeth Whitening</Link></li>
            <li><Link to="/services/implants" className="hover:text-white">Dental Implants</Link></li>
            <li><Link to="/services/braces" className="hover:text-white">Braces & Aligners</Link></li>
            <li><Link to="/services/root-canal" className="hover:text-white">Root Canal</Link></li>
          </ul>
        </div>

        {/* Column 4 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2" />
              123 Smile Street, New Delhi, India
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="mr-2" /> +91 9876543210
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" /> info@smilecare.com
            </li>
            <li>Mon - Sat: 9:00 AM – 7:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} SmileCare Dental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
