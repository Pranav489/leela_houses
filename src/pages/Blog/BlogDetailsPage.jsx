import React, { useState, useEffect } from "react";
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
import { Link, useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../services/api"; // Adjust path as needed

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch the main blog post and related posts
      const postResponse = await axiosInstance.get(`/blog/${slug}`);
      setBlogPost(postResponse.data.post);
      
      // Fetch recent posts from the dedicated endpoint
      const recentResponse = await axiosInstance.get('/blog/recent');
      setRecentPosts(recentResponse.data);
      
      // Fetch categories
      const categoriesResponse = await axiosInstance.get('/categories');
      setCategories(categoriesResponse.data);
      
    } catch (err) {
      setError(err.message);
      if (err.response?.status === 404) {
        navigate('/404', { replace: true });
      }
    } finally {
      setLoading(false);
    }
  };

  fetchData();
}, [slug, navigate]);

  if (loading) {
    return (
      <div className="bg-yellow-50 min-h-screen pt-40 flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-yellow-50 min-h-screen pt-40 flex justify-center items-center">
        <div className="text-center p-6 bg-red-100 rounded-lg max-w-md">
          <h3 className="text-xl font-bold text-red-700 mb-2">Error loading post</h3>
          <p className="text-red-600">{error}</p>
          <Link
            to="/blog"
            className="mt-4 inline-block px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="bg-yellow-50 min-h-screen pt-40 flex justify-center items-center">
        <div className="text-center p-6 bg-yellow-100 rounded-lg max-w-md">
          <h3 className="text-xl font-bold text-yellow-800 mb-2">Post not found</h3>
          <p className="text-yellow-700 mb-4">The requested blog post doesn't exist.</p>
          <Link
            to="/blog"
            className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 min-h-screen pt-40">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${blogPost.image_url || 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'})` }}
      >
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
                src={blogPost.image_url || 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'}
                alt={blogPost.title}
                className="w-full h-96 object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
                }}
              />

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-800 bg-orange-100 rounded-full">
                    {blogPost.category}
                  </span>
                  <span className="text-sm text-gray-500 flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    {new Date(blogPost.published_date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={blogPost.author_avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'}
                    alt={blogPost.author_name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
                    }}
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {blogPost.author_name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {blogPost.author_role}
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
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blogPost.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-colors"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blogPost.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-colors"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(blogPost.image_url)}&description=${encodeURIComponent(blogPost.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-colors"
                    >
                      <FaPinterest />
                    </a>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`${blogPost.title} - ${window.location.href}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    src={blogPost.author_avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'}
                    alt={blogPost.author_name}
                    className="w-16 h-16 rounded-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
                    }}
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">
                      {blogPost.author_name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {blogPost.author_role}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  {blogPost.author_bio || `${blogPost.author_name} has been writing about ${blogPost.category.toLowerCase()} topics for several years.`}
                </p>
              </div>

              {/* Recent Posts */}
<div className="mb-8">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Recent Posts
  </h3>
  {recentPosts.length > 0 ? (
    <ul className="space-y-3">
      {recentPosts.map((post) => (
        <li key={post.id}>
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-start gap-3 group"
          >
            <img
              src={post.image_url || 'https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'}
              alt={post.title}
              className="w-16 h-16 object-cover rounded"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
              }}
            />
            <div>
              <h4 className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-xs text-gray-500">
                {new Date(post.published_date).toLocaleDateString("en-US", {
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
  ) : (
    <p className="text-sm text-gray-500">No recent posts found</p>
  )}
</div>
              {/* Categories Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.slug}>
                      <Link
                        to={`/blog/category/${category.slug}`}
                        className="flex items-center justify-between w-full text-left text-gray-600 hover:text-orange-600 transition-colors"
                      >
                        <span>{category.name}</span>
                        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {category.count}
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