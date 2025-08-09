import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaTooth, FaSmile, FaTeeth, FaClinicMedical } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [hoverServices, setHoverServices] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const [submenuTimeout, setSubmenuTimeout] = useState(null);

  const toggleMenu = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // Services inserted separately
    { name: "Appointments", path: "/appointment" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`w-full z-40 top-0 transition-all duration-300 ${isSticky ? "fixed bg-white shadow-md" : "absolute bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-2xl font-bold text-blue-600">SmileCare</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-gray-800 font-medium relative items-center">
          {navLinks.slice(0, 2).map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition duration-300"
            >
              {link.name}
            </Link>
          ))}

          {/* Services with animated submenu */}
       <Link to="/services/">   <div
            className="relative"
            onMouseEnter={() => {
              clearTimeout(submenuTimeout);
              setHoverServices(true);
            }}
            onMouseLeave={() => {
              const timeout = setTimeout(() => setHoverServices(false), 200);
              setSubmenuTimeout(timeout);
            }}
          >
            <button className="flex items-center gap-1 hover:text-blue-600 transition">
              Services <FaChevronDown className="text-xs mt-1" />
            </button>

            <ul
              className={`absolute top-full left-0 mt-2 w-56 bg-white border rounded shadow-lg transition-all duration-300 ease-in-out origin-top scale-100 opacity-100 z-50
                ${hoverServices ? "visible opacity-100 scale-100" : "invisible opacity-0 scale-95"}
              `}
            >
              <li>
                <Link to="/services/general" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <FaTooth /> General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/CosmeticDentistry" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <FaSmile /> Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/orthodontics" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <FaTeeth /> Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/services/emergency" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
                  <FaClinicMedical /> Emergency Care
                </Link>
              </li>
            </ul>
          </div></Link>

          {navLinks.slice(2).map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="hover:text-blue-600 transition duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden text-gray-800 text-2xl cursor-pointer" onClick={toggleMenu}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile menu */}
      {navOpen && (
        <div className="md:hidden bg-white px-4 pb-4 shadow-md">
          {navLinks.slice(0, 2).map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="block py-2 border-b text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

          {/* Services submenu mobile */}
          <div className="py-2 border-b">
            <button
              onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
              className="flex items-center justify-between w-full text-gray-800 font-medium"
            >
              <span>Services</span>
              <FaChevronDown className={`transition-transform ${mobileSubmenuOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileSubmenuOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                <li>
                  <Link to="/services/general" onClick={toggleMenu} className="flex items-center gap-2 text-sm hover:text-blue-600">
                    <FaTooth /> General Dentistry
                  </Link>
                </li>
                <li>
                  <Link to="/services/CosmeticDentistry" onClick={toggleMenu} className="flex items-center gap-2 text-sm hover:text-blue-600">
                    <FaSmile /> Cosmetic Dentistry
                  </Link>
                </li>
                <li>
                  <Link to="/services/orthodontics" onClick={toggleMenu} className="flex items-center gap-2 text-sm hover:text-blue-600">
                    <FaTeeth /> Orthodontics
                  </Link>
                </li>
                <li>
                  <Link to="/services/emergency" onClick={toggleMenu} className="flex items-center gap-2 text-sm hover:text-blue-600">
                    <FaClinicMedical /> Emergency Care
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {navLinks.slice(2).map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={toggleMenu}
              className="block py-2 border-b text-gray-700 hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
