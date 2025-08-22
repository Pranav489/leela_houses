import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import SEO from "../../components/SEO";

const ContactUsPage = () => {
  const [contactInfo, setContactInfo] = useState({
    tel_number: "",
    mobile_number1: "",
    mobile_number2: "",
    email1: "",
    email2: "",
    whatsapp_number: "",
    address_line1: "",
    address_line2: "",
    address_line3: "",
    address_line4: "",
    address_line5: "",
    social_link_1: "",
    social_link_2: "",
    social_link_3: "",
    social_link_4: "",
    social_link_5: "",
    open_hours: "",
  });

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState("");

  // Fetch contact information
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axiosInstance.get('/contact');
        setContactInfo(response.data);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await axiosInstance.post('/contactform', formData);
      setSubmitStatus('success');
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
      setSubmitError(
        error.response?.data?.message ||
        "Could not send your message. Please try again later."
      );
    }
  };

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

  return (
    <div className="bg-yellow-50 min-h-screen pt-40">
      <SEO
  title="Contact Us | Book Your Stay at Leela Farmhouse"
  description="Plan your getaway today! Contact Leela Farmhouse farmhouse resort for bookings, events, or inquiries. Escape to nature with comfort and style."
/>

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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                >
                  <option value="">Select a subject</option>
                  <option>Booking Inquiry</option>
                  <option>General Question</option>
                  <option>Group Booking</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className={`w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3 px-4 rounded-md transition-colors disabled:opacity-50 ${submitStatus === "submitting"
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                  }`}
              >
                {submitStatus === 'sending' ? <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span> : ('Send Message')}
              </button>
            </form>
            <div className="mt-4">
              {submitStatus === "sending" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-blue-50 rounded-md"
                >
                  <svg
                    className="w-5 h-5 text-blue-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-blue-700">Sending your message...</span>
                </motion.div>
              )}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center p-4 bg-green-50 rounded-md"
                >
                  <svg
                    className="w-5 h-5 text-green-500 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-green-700">
                      Thank you for your message!
                    </p>
                    <p className="text-sm text-green-600 mt-1">
                      We've received your message and will contact you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 rounded-md"
                >
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mr-3 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <div>
                      <p className="font-medium text-red-700">
                        There was an error sending your message
                      </p>
                      <p className="text-sm text-red-600 mt-1">
                        {submitError || "Please try again later."}
                      </p>
                      <button
                        onClick={() => setSubmitStatus(null)}
                        className="mt-2 text-sm font-medium text-red-600 hover:text-red-700 focus:outline-none"
                      >
                        Try again →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
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
                  {contactInfo.tel_number && (
                    <p className="text-gray-600">{contactInfo.tel_number}</p>
                  )}
                  {contactInfo.mobile_number1 && (
                    <p className="text-gray-600">{contactInfo.mobile_number1}</p>
                  )}
                  {contactInfo.mobile_number2 && (
                    <p className="text-gray-600">{contactInfo.mobile_number2}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaEnvelope className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  {contactInfo.email1 && (
                    <p className="text-gray-600">{contactInfo.email1}</p>
                  )}
                  {contactInfo.email2 && (
                    <p className="text-gray-600">{contactInfo.email2}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-orange-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  {contactInfo.address_line1 && (
                    <p className="text-gray-600">{contactInfo.address_line1}</p>
                  )}
                  {contactInfo.address_line2 && (
                    <p className="text-gray-600">{contactInfo.address_line2}</p>
                  )}
                  {contactInfo.address_line3 && (
                    <p className="text-gray-600">{contactInfo.address_line3}</p>
                  )}
                  {contactInfo.address_line4 && (
                    <p className="text-gray-600">{contactInfo.address_line4}</p>
                  )}
                  {contactInfo.address_line5 && (
                    <p className="text-gray-600">{contactInfo.address_line5}</p>
                  )}
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-4">
                  {contactInfo.whatsapp_number && (
                    <a
                      href={contactInfo.social_link_5}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-colors"
                    >
                      <FaWhatsapp className="text-orange-600 text-xl" />
                    </a>
                  )}
                  {contactInfo.social_link_1 && (
                    <a
                      href={contactInfo.social_link_1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-colors"
                    >
                      <FaFacebook className="text-orange-600 text-xl" />
                    </a>
                  )}
                  {contactInfo.social_link_4 && (
                    <a
                      href={contactInfo.social_link_4}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-100 hover:bg-orange-200 p-3 rounded-full transition-colors"
                    >
                      <FaInstagram className="text-orange-600 text-xl" />
                    </a>
                  )}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.8119916544683!2d73.7477253!3d18.4014059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2974047cfe62b%3A0xd946545645c94669!2sThe%20Leela%20Family%20Farm%20House%20Resort%20-%20Best%20Holiday%20stay%20near%20Pune%20with%20Swimming%20Pool!5e0!3m2!1sen!2sin!4v1755673324420!5m2!1sen!2sin"
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