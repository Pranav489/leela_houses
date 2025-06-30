import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
  FaCalendarAlt,
  FaUser,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogDetailsPage = () => {
  const blogPost = {
    id: 1,
    title: "Top 5 Nature Activities Near Leela Farmhouse",
    content: `
      <p>When you stay at Leela Farmhouse, you're surrounded by nature's beauty. Here are our top recommendations for outdoor activities within a short distance from our property:</p>
      
      <h3>1. Morning Bird Watching</h3>
      <p>Our location is a haven for bird enthusiasts. The nearby forest area is home to over 50 species of birds. Join our guided bird watching tours at dawn when the birds are most active.</p>
      
      <h3>2. Sunset Hill Trek</h3>
      <p>A moderate 2-hour trek leads you to a breathtaking viewpoint perfect for sunset photography. The trail passes through scenic landscapes and offers panoramic views of the valley.</p>
      
      <h3>3. Organic Farm Tour</h3>
      <p>Visit our 5-acre organic farm where we grow seasonal produce. Learn about sustainable farming practices and even participate in harvesting (seasonal).</p>
      
      <h3>4. Riverside Picnic</h3>
      <p>We'll pack you a delicious lunch basket for a picnic by the pristine river just 15 minutes from the farmhouse. Perfect for families and couples.</p>
      
      <h3>5. Night Sky Observation</h3>
      <p>With minimal light pollution, our location offers spectacular stargazing opportunities. We provide telescopes and astronomy guides during clear nights.</p>
      
      <p>All these activities can be arranged through our front desk. Some require advance booking, especially during peak seasons.</p>
    `,
    date: "2023-06-15",
    author: "Amit Sharma",
    authorRole: "Activities Guide",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Activities",
  };

  const recentPosts = [
    {
      id: 2,
      title: "Farm-to-Table: Our Organic Food Philosophy",
      date: "2023-05-22",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Sustainable Tourism: Our Eco-Friendly Practices",
      date: "2023-04-10",
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Monsoon Magic at Leela Farmhouse",
      date: "2023-03-28",
      image:
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const categories = [
    "Activities",
    "Dining",
    "Sustainability",
    "Seasons",
    "Family",
    "Wellness",
  ];

  return (
    <div className="bg-yellow-50 min-h-screen pt-40">
      {/* Hero Section */}
      <div className="relative h-64 bg-[url('https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-orange-800 bg-opacity-60 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-yellow-50 mb-4"
            >
              {blogPost.title}
            </motion.h1>
            <Link
              to="/blog"
              className="inline-flex items-center text-yellow-100 hover:text-white"
            >
              <FaArrowLeft className="mr-2" /> Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full">
                    {blogPost.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    {new Date(blogPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={blogPost.authorAvatar}
                    alt={blogPost.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {blogPost.author}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {blogPost.authorRole}
                    </p>
                  </div>
                </div>

                {/* Article Content */}
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                ></div>

                {/* Social Sharing */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">
                    Share this article
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href="#"
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                    >
                      <FaPinterest />
                    </a>
                    <a
                      href="#"
                      className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className="lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
              {/* About Author */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  About the Author
                </h3>
                <div className="flex items-center gap-4">
                  <img
                    src={blogPost.authorAvatar}
                    alt={blogPost.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {blogPost.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {blogPost.authorRole}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Amit has been guiding nature activities at Leela Farmhouse for
                  5 years. His deep knowledge of local flora and fauna makes
                  every excursion educational and enjoyable.
                </p>
              </div>

              {/* Recent Posts */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent Posts
                </h3>
                <ul className="space-y-3">
                  {recentPosts.map((post) => (
                    <li key={post.id}>
                      <Link
                        to={`/blog/${post.id}`}
                        className="flex items-start gap-3 group"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Categories
                </h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={`/blog/category/${category.toLowerCase()}`}
                        className="flex items-center justify-between w-full text-left text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        <span>{category}</span>
                        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category === "Activities" ? "3" : "2"}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Subscribe
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Get the latest articles and news delivered to your inbox
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailsPage;
