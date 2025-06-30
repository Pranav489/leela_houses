import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="bg-yellow-50 min-h-screen pt-40">
      {/* Hero Section */}
      <div className="relative h-96 bg-[url('https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-orange-800 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-yellow-50 mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-yellow-100 max-w-2xl mx-auto"
            >
              We'd love to hear from you! Reach out for bookings or inquiries.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-800 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="">Select a subject</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="group">Group Booking</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-orange-800 mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaPhone className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+91 79727 09407</p>
                  <p className="text-gray-600">+91 82610 79943</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaEnvelope className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@leelafarmhouse.com</p>
                  <p className="text-gray-600">bookings@leelafarmhouse.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Address
                  </h3>
                  <p className="text-gray-600">Leela Farmhouse, Near Pune</p>
                  <p className="text-gray-600">Maharashtra, India</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/917972709407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-colors"
                  >
                    <FaWhatsapp className="text-orange-600 text-xl" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-colors"
                  >
                    <FaFacebook className="text-orange-600 text-xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-colors"
                  >
                    <FaInstagram className="text-orange-600 text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Find Us on Map
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.441676553995!2d73.91486531536798!3d18.4528609874539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ea950f616219%3A0x321bdae2cea9f064!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1624457356787!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Leela Farmhouse Location"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
