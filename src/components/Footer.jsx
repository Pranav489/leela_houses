import React, { useState, useEffect } from "react";
import axiosInstance from "../services/api";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTripadvisor,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { BsCalendarCheck } from "react-icons/bs";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [contactInfo, setContactInfo] = useState({
    tel_number: "",
    mobile_number1: "",
    whatsapp_number: "",
    email1: "",
    address_line1: "",
    address_line2: "",
    address_line3: "",
    address_line4: "",
    address_line5: "",
    open_hours: "",
    social_link_1: "", // Facebook
    social_link_2: "", // Twitter
    social_link_3: "", // YouTube
    social_link_4: "", // Instagram
    social_link_5: "", // WhatsApp
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Links configuration - now with explicit section IDs
  const quickLinks = [
    { name: "Home", target: "/", type: "page" },
    { name: "About Us", target: "/about", type: "page" },
    { name: "Packages", target: "/services", section: "packages", type: "section" },
    { name: "Gallery", target: "/gallery", type: "page" },
    { name: "Amenities", target: "/gallery", section: "amenities", type: "section" },
    { name: "Testimonials", target: "/", section: "testimonials", type: "section" },
  ];

  // Handle both page navigation and section scrolling
  const handleNavigation = (e, target, type, section = null) => {
    e.preventDefault();

    if (type === "page") {
      // Regular page navigation
      navigate(target);
    } else {
      // Section navigation - always navigate first then scroll
      navigate(target, {
        state: { scrollTo: section },
        // Only replace if we're already on the target page to maintain history
        replace: location.pathname === target
      });
    }
  };

  // Handle scroll after page navigation or on initial render
  useEffect(() => {
    const handleScroll = () => {
      // Check for hash in URL first
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 100);
        }
      }
      // Then check for state-based scrolling
      else if (location.state?.scrollTo) {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
            // Clear the state to prevent re-scrolling
            navigate(location.pathname, { replace: true, state: {} });
          }, 100);
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(handleScroll, 50);
    return () => clearTimeout(timer);
  }, [location, navigate]);

  // Define social icons with dynamic URLs
  const socialIcons = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      color: "text-blue-600",
      url: contactInfo.social_link_1
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      color: "text-pink-600",
      url: contactInfo.social_link_4
    },
    {
      icon: FaTwitter,
      label: "Twitter",
      color: "text-blue-400",
      url: contactInfo.social_link_2
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      color: "text-red-600",
      url: contactInfo.social_link_3
    },
  ];

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axiosInstance.get('/contact');
        setContactInfo(response.data);
      } catch (err) {
        console.error("Error fetching contact info:", err);
        setError("Failed to load contact information");
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  if (loading) {
      if (loading) {
        return (
          <div className="h-[600px] md:h-[700px] flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <motion.div
                className="flex justify-center mb-6"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                <div className="w-16 h-16 border-4 border-amber-500 border-t-transparent rounded-full"></div>
              </motion.div>
              <motion.h2
                className="text-2xl font-semibold text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Loading...
              </motion.h2>
              <motion.p
                className="text-gray-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Preparing your experience
              </motion.p>
            </div>
          </div>
        );
      }
    }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-amber-50 text-gray-800 pt-16 pb-8 px-6 md:px-16 rounded-t-3xl shadow-inner"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-amber-700">
            Leela Farmhouse
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Experience the perfect blend of nature and comfort at our serene
            farmhouse resort near Pune. Your ideal getaway for relaxation and
            memorable experiences.
          </p>
          <div className="flex gap-4 mt-6">
            {socialIcons.map(({ icon: Icon, label, color, url }, index) => (
              url && (
                <motion.a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  title={label}
                  className={`cursor-pointer bg-white p-3 rounded-full shadow-sm hover:bg-amber-100 ${color}`}
                >
                  <Icon size={18} />
                </motion.a>
              )
            ))}
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-700">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.type === 'section' ? `${link.target}#${link.section}` : link.target}
                  onClick={(e) => handleNavigation(e, link.target, link.type, link.section)}
                  className="text-gray-700 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}

          </ul>
        </motion.div>


        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-700">
            Contact Us
          </h3>
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="flex items-start gap-3">
              <IoLocationOutline size={20} className="text-amber-600 mt-1" />
              <span>
                {contactInfo.address_line1 || "Near Pune, Maharashtra"}
                {contactInfo.address_line2 && (
                  <>
                    <br />
                    {contactInfo.address_line2}
                  </>
                )}
                {contactInfo.address_line3 && (
                  <>
                    <br />
                    {contactInfo.address_line3}
                  </>
                )}
                {contactInfo.address_line4 && (
                  <>
                    <br />
                    {contactInfo.address_line4}
                  </>
                )}
                {contactInfo.address_line5 && (
                  <>
                    <br />
                    {contactInfo.address_line5}
                  </>
                )}
                <br />
                <span className="text-xs text-gray-500">
                  (Exact location provided upon booking)
                </span>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-amber-600" />
              <div>
                {contactInfo.mobile_number1 && (
                  <a
                    href={`tel:${contactInfo.mobile_number1}`}
                    className="hover:text-amber-600"
                  >
                    {contactInfo.mobile_number1}
                  </a>
                )}
                {contactInfo.whatsapp_number && (
                  <div className="flex gap-2 mt-1">
                    <a
                      href={contactInfo.social_link_5}
                      className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1"
                    >
                      <FaWhatsapp size={12} /> WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </li>

            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} className="text-amber-600" />
              {contactInfo.email1 && (
                <a
                  href={`mailto:${contactInfo.email1}`}
                  className="hover:text-amber-600"
                >
                  {contactInfo.email1}
                </a>
              )}
            </li>

            <li className="flex items-center gap-3">
              <BsCalendarCheck size={20} className="text-amber-600" />
              <span>
                {contactInfo.open_hours || "Open 24/7"} for bookings
              </span>

            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-700">
            Newsletter
          </h3>
          <p className="text-sm text-gray-700 mb-4">
            Subscribe to get updates on special offers and seasonal packages.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center text-sm text-gray-600 border-t border-amber-200 pt-6"
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-amber-700">
              Leela Farmhouse
            </span>
            . All Rights Reserved by{" "}
            <span
              className="font-semibold text-amber-700"
              href="https://www.richsol.com/"
            >
              Rich System Solution
            </span>
            .{" "}
          </p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-amber-600">
              Terms of Service
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-700 hover:text-amber-600">
              Cancellation Policy
            </a>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
