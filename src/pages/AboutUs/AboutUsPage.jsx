import React from "react";
import { motion } from "framer-motion";
import { FaSwimmingPool, FaHiking, FaUtensils, FaTree } from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="bg-yellow-50 pt-40 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
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
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
              Our Story
            </motion.h2>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Founded in 2010, Leela Farmhouse began as a small family retreat
              that we decided to share with others seeking peace away from city
              life. What started as a simple farm stay has now blossomed into a
              beloved eco-resort.
            </motion.p>
            <motion.p
              className="text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              We're committed to sustainable tourism and preserving the natural
              beauty of our surroundings while providing comfortable
              accommodations and authentic rural experiences.
            </motion.p>
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
            {[
              {
                icon: (
                  <FaSwimmingPool className="text-4xl text-orange-600 mb-4" />
                ),
                title: "Swimming Pool",
                desc: "Refresh in our chemical-free natural swimming pool",
              },
              {
                icon: <FaHiking className="text-4xl text-orange-600 mb-4" />,
                title: "Nature Trails",
                desc: "Explore scenic hiking paths through untouched wilderness",
              },
              {
                icon: <FaUtensils className="text-4xl text-orange-600 mb-4" />,
                title: "Farm-to-Table",
                desc: "Enjoy meals prepared with organic ingredients from our farm",
              },
              {
                icon: <FaTree className="text-4xl text-orange-600 mb-4" />,
                title: "Eco-Friendly",
                desc: "Sustainable practices that protect our environment",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
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
          {[
            {
              name: "Rajesh Patil",
              role: "Founder & Host",
              bio: "With 20+ years in hospitality, Rajesh ensures every guest feels at home.",
              img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            },
            {
              name: "Sunita Patil",
              role: "Head Chef",
              bio: "Sunita's traditional recipes using local ingredients will delight your palate.",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            },
            {
              name: "Amit Sharma",
              role: "Activities Guide",
              bio: "Amit's knowledge of local flora and fauna makes every trek educational.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
            },
          ].map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
