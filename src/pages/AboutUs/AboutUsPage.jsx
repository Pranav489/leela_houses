import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSwimmingPool, FaHiking, FaUtensils, FaTree } from "react-icons/fa";
import axiosInstance from '../../services/api';
const AboutUsPage = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/about-us");
        setAboutData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-50">
        <div className="text-orange-800 text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-50">
        <div className="text-red-600 text-xl">Error: {error}</div>
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="flex justify-center items-center h-screen bg-yellow-50">
        <div className="text-orange-800 text-xl">No data available</div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 pt-40 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96  bg-cover bg-center">
        <div className="absolute inset-0 bg-orange-800 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-yellow-50 mb-4"
            >
              About Leela Farmhouse
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-yellow-100 max-w-2xl mx-auto"
            >
              Discover our serene retreat nestled in nature's lap
            </motion.p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.img
              src={aboutData.our_story.image_url || "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}
              alt="Leela Farmhouse"
              className="rounded-lg shadow-xl w-full h-auto"
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
              Our Story
            </motion.h2>
            <motion.div
              className="text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              dangerouslySetInnerHTML={{ __html: aboutData.our_story.content }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center text-orange-800 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Choose Leela Farmhouse
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.features.map((feature, index) => {
              // Map icon names to actual components
              const iconMap = {
                FaSwimmingPool: <FaSwimmingPool className="text-4xl text-orange-600 mb-4" />,
                FaHiking: <FaHiking className="text-4xl text-orange-600 mb-4" />,
                FaUtensils: <FaUtensils className="text-4xl text-orange-600 mb-4" />,
                FaTree: <FaTree className="text-4xl text-orange-600 mb-4" />
              };
              
              const IconComponent = iconMap[feature.icon] || iconMap.FaTree;

              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {IconComponent}
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-orange-800 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet Our Family
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image_url || "https://via.placeholder.com/500x300?text=Team+Member"}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;