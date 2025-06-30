import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Home,
  Info,
  BookOpen,
  Camera,
  MessageSquare,
  Map,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { leelaLogo } from "../assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { label: "About", path: "/about", icon: <Info className="h-4 w-4 mr-2" /> },
    {
      label: "Services",
      path: "/services",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
    },
    {
      label: "Gallery",
      path: "/gallery",
      icon: <Map className="h-4 w-4 mr-2" />,
    },
    {
      label: "Blog",
      path: "/blog",
      icon: <MessageSquare className="h-4 w-4 mr-2" />,
    },
    {
      label: "Contact",
      path: "/contact",
      icon: <Phone className="h-4 w-4 mr-2" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="fixed w-full z-50">
      {/* Top Contact Bar */}
      <div
        className={`bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm transition-all duration-300 ${
          scrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
            <a
              href="mailto:info@leelafarmhouse.com"
              className="flex items-center hover:text-amber-200 transition-colors"
            >
              <Mail className="h-4 w-4 mr-1" />
              info@leelafarmhouse.com
            </a>
            <a
              href="tel:+918261079943"
              className="flex items-center hover:text-amber-200 transition-colors"
            >
              <Phone className="h-4 w-4 mr-1" />
              +91 8261079943
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Clock className="h-4 w-4 mr-1" />
            <span>Open 24/7</span>
            {/* Social Media Icons */}
            <div className="flex space-x-2 ml-4">
              <a href="#" className="hover:text-amber-200">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-amber-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-amber-200">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white shadow-md transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-amber-700 ">
              <img
                src={leelaLogo}
                alt="Leela Farmhouse"
                className="h-30 w-60"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center text-gray-800 hover:text-amber-600 transition-colors"
                    >
                      {item.icon}
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-amber-100"
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem}
                                href={`#${subItem
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="block px-4 py-2 text-gray-800 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.path}
                    className="flex items-center text-gray-800 hover:text-amber-600 transition-colors"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            {/* Call Now Button */}
            <a
              href="tel:+918261079943"
              className="ml-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <img
                    src="/logo.png"
                    alt="Leela Farmhouse"
                    className="h-10 w-10"
                  />
                  <a
                    href="/home"
                    className="text-xl font-bold text-amber-600 ml-2"
                  >
                    Leela Farmhouse
                  </a>
                </div>
                <button onClick={toggleMenu} className="text-gray-800">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-gray-100 pb-2"
                  >
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="flex items-center justify-between w-full py-3 text-gray-800"
                        >
                          <div className="flex items-center">
                            {item.icon}
                            <span className="ml-2">{item.label}</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${
                              openDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-8 overflow-hidden"
                          >
                            <div className="py-2 space-y-2">
                              {item.subItems.map((subItem) => (
                                <a
                                  key={subItem}
                                  href={`#${subItem
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                                  className="block py-2 text-gray-600 hover:text-amber-600 transition-colors"
                                  onClick={toggleMenu}
                                >
                                  {subItem}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.path}
                        className="flex items-center py-3 text-gray-800 hover:text-amber-600 transition-colors"
                        onClick={toggleMenu}
                      >
                        {item.icon}
                        <span className="ml-2">{item.label}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="tel:+918261079943"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg flex items-center justify-center transition-colors mb-4"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918261079943"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg flex items-center justify-center transition-colors"
                >
                  <i className="fab fa-whatsapp h-5 w-5 mr-2"></i>
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Contact Us</h3>
                <a
                  href="mailto:info@leelafarmhouse.com"
                  className="flex items-center text-gray-700 mb-2"
                >
                  <Mail className="h-5 w-5 mr-2 text-amber-600" />
                  info@leelafarmhouse.com
                </a>
                <a
                  href="tel:+917972709407"
                  className="flex items-center text-gray-700 mb-2"
                >
                  <Phone className="h-5 w-5 mr-2 text-amber-600" />
                  +918261079943
                </a>
                <div className="flex items-start text-gray-700">
                  <MapPin className="h-5 w-5 mr-2 text-amber-600 mt-1" />
                  <span>Near Pune, Maharashtra</span>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-amber-600 hover:text-amber-700">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="text-amber-600 hover:text-amber-700">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-amber-600 hover:text-amber-700">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-amber-600 hover:text-amber-700">
                    <i className="fab fa-youtube text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
