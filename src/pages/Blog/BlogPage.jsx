import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import axiosInstance from "../../services/api"; // Adjust the path as needed

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current_page: 1,
    per_page: 6,
    total: 0,
  });

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/blog?page=${pagination.current_page}&per_page=${pagination.per_page}`
        );
        setBlogPosts(response.data.data); // Assuming Laravel pagination structure
        setPagination({
          current_page: response.data.current_page,
          per_page: response.data.per_page,
          total: response.data.total,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, [pagination.current_page, pagination.per_page]);

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(pagination.total / pagination.per_page)) {
      setPagination({ ...pagination, current_page: page });
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

  if (error) {
    return (
      <div className="bg-yellow-50 min-h-screen pt-30 flex justify-center items-center">
        <div className="text-center p-6 bg-red-100 rounded-lg max-w-md">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            Error loading posts
          </h3>
          <p className="text-red-600">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              No posts found
            </h3>
            <p className="text-gray-600">
              There are currently no blog posts available.
            </p>
          </div>
        ) : (
          <>
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
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image_url}
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
                            {new Date(post.published_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                          <span className="flex items-center">
                            <FaUser className="mr-1" />
                            {post.author_name}
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
            {pagination.total > pagination.per_page && (
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(pagination.current_page - 1)}
                    disabled={pagination.current_page === 1}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-orange-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  
                  {Array.from(
                    { length: Math.ceil(pagination.total / pagination.per_page) },
                    (_, i) => i + 1
                  ).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 border rounded-md ${
                        page === pagination.current_page
                          ? "bg-orange-600 text-white border-orange-600"
                          : "border-gray-300 text-gray-700 hover:bg-orange-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(pagination.current_page + 1)}
                    disabled={
                      pagination.current_page ===
                      Math.ceil(pagination.total / pagination.per_page)
                    }
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-orange-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </motion.div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default BlogPage;