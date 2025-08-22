import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSwimmingPool, FaHiking, FaUtensils, FaTree } from "react-icons/fa";
import { Link } from "react-router-dom";
import axiosInstance from "../../services/api";
import { property_14 } from "../../assets";
import SEO from "../../components/SEO";

const HomePage = () => {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        const response = await axiosInstance.get("/services");
        setServices(response.data.data);
      } catch (err) {
        setError(err.message || 'Failed to load services data');
      } finally {
        setLoading(false);
      }
    };

    getServices();
  }, []);

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

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!services) {
    return null;
  }

  return (
    <div className="bg-yellow-50">
      <SEO
  title="Resort Services & Amenities | Leela Farmhouse Retreat"
  description="Leela Farmhouse offers premium resort services including luxury rooms, organic dining, event hosting, outdoor activities, and personalized hospitality for a relaxing stay."
/>
      {/* Hero Section */}
      <section className="relative h-screen bg-[url('https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-orange-800 bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-yellow-50 mb-6"
            >
              Welcome to Leela Farmhouse
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8"
            >
              A serene retreat nestled in nature's lap near Pune
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
              >
                Book Your Stay
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.img
              src={services.oasis.image}
              alt="Leela Farmhouse"
              className="rounded-lg shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="md:w-1/2">
            <motion.h2
              className="text-3xl font-bold text-orange-800 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Discover Our Oasis
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {services.oasis.text}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-orange-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Packages
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-center text-orange-700 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-gray-800">
                    ₹{pkg.price}
                  </span>
                  <span className="text-sm text-gray-600 ml-1">per {pkg.per}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((include, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span className="text-gray-700">{include.item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-orange-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Dining Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.dining_options.map((option, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-orange-700 mb-4">
                {option.type}
              </h3>
              <ul className="space-y-2">
                {option.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span className="text-gray-700">{item.item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BBQ Options */}
        <motion.div
          className="bg-orange-100 p-6 rounded-lg border border-orange-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-orange-800 mb-4">
            Special BBQ Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.bbq_options.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-md shadow-sm">
                <h4 className="font-medium text-gray-800">{item.item}</h4>
                <p className="text-orange-600 font-medium">{item.price}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-700">
            * If you bring your own chicken/paneer, we charge only making
            charges according to quantity.
          </p>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cover bg-center" style={{ backgroundImage: `url(${property_14})` }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              Ready for Your Getaway?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Book your stay at Leela Farmhouse today and experience the perfect
              blend of nature and comfort.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Book Now
              </Link>
              <Link
                to="/contact"
                className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-50 font-bold py-3 px-8 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;