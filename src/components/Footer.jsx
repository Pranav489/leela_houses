import React from "react";
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
  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook", color: "text-blue-600" },
    { icon: FaInstagram, label: "Instagram", color: "text-pink-600" },
    { icon: FaTwitter, label: "Twitter", color: "text-blue-400" },
    { icon: FaYoutube, label: "YouTube", color: "text-red-600" },
    // { icon: FaTripadvisor, label: "TripAdvisor", color: "text-green-600" },
    // { icon: FaWhatsapp, label: "WhatsApp", color: "text-green-500" },
  ];

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About Us", link: "#about" },
    { name: "Packages", link: "#packages" },
    { name: "Gallery", link: "#gallery" },
    { name: "Amenities", link: "#amenities" },
    { name: "Testimonials", link: "#testimonials" },
  ];

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
            {socialIcons.map(({ icon: Icon, label, color }, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
                title={label}
                className={`cursor-pointer bg-white p-3 rounded-full shadow-sm hover:bg-amber-100 ${color}`}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-amber-700">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href={link.link}
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
                Near Pune, Maharashtra
                <br />
                <span className="text-xs text-gray-500">
                  (Exact location provided upon booking)
                </span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <IoCallOutline size={20} className="text-amber-600" />
              <div>
                <a href="tel:+918261079943" className="hover:text-amber-600">
                  +91 8261079943
                </a>
                <div className="flex gap-2 mt-1">
                  <a
                    href="https://wa.me/918261079943"
                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1"
                  >
                    <FaWhatsapp size={12} /> WhatsApp
                  </a>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineEmail size={20} className="text-amber-600" />
              <a
                href="mailto:info@leelafarmhouse.com"
                className="hover:text-amber-600"
              >
                info@leelafarmhouse.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <BsCalendarCheck size={20} className="text-amber-600" />
              <span>Open 24/7 for bookings</span>
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
