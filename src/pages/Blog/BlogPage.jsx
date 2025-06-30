import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Nature Activities Near Leela Farmhouse",
      excerpt:
        "Discover the best outdoor experiences within 30 minutes of our resort",
      date: "2023-06-15",
      author: "Amit Sharma",
      image:
        "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "Activities",
    },
    {
      id: 2,
      title: "Farm-to-Table: Our Organic Food Philosophy",
      excerpt: "How we grow and serve fresh ingredients straight from our farm",
      date: "2023-05-22",
      author: "Sunita Patil",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Dining",
    },
    {
      id: 3,
      title: "Sustainable Tourism: Our Eco-Friendly Practices",
      excerpt:
        "Learn how we minimize our environmental impact while providing great hospitality",
      date: "2023-04-10",
      author: "Rajesh Patil",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
    },
    {
      id: 4,
      title: "Monsoon Magic at Leela Farmhouse",
      excerpt:
        "Why the rainy season might be the best time to visit our retreat",
      date: "2023-03-28",
      author: "Amit Sharma",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Seasons",
    },
    {
      id: 5,
      title: "Family-Friendly Activities for Your Stay",
      excerpt: "Fun experiences that kids and parents will enjoy together",
      date: "2023-02-15",
      author: "Sunita Patil",
      image:
        "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Family",
    },
    {
      id: 6,
      title: "Yoga Retreats at Leela Farmhouse",
      excerpt:
        "How we create the perfect environment for mindfulness and relaxation",
      date: "2023-01-05",
      author: "Rajesh Patil",
      image:
        "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Wellness",
    },
  ];

  return (
    <div className="bg-yellow-50 min-h-screen pt-30">
      {/* Hero Section */}
      <div className="relative h-96 bg-[url('https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-orange-800 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-yellow-50 mb-4"
            >
              Leela Farmhouse Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-yellow-100 max-w-2xl mx-auto"
            >
              Stories, tips, and insights from our farmhouse retreat
            </motion.p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center">
                        <FaUser className="mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors flex items-center">
                      Read More <FaArrowRight className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-orange-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-md">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-orange-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-orange-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-orange-50">
              Next
            </button>
          </nav>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;
