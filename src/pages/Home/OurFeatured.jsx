import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, CalendarDays, Users } from 'lucide-react';
import CountUp from 'react-countup';
import axiosInstance from '../../services/api';
const OurFeatured = () => {
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [propertyData, setPropertyData] = useState({
    regular_images: [],
    featured_images: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Fetch data from API
  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        const response = await axiosInstance.get('/premier-property');
        const data = response.data.data;
        
        // Initialize with empty arrays if undefined
        data.regular_images = data.regular_images || [];
        data.featured_images = data.featured_images || [];
        
        setPropertyData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching property data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, []);

  // Auto-advance right gallery
  // Auto-advance right gallery (featured images only)
  useEffect(() => {
    if (!propertyData.featured_images || propertyData.featured_images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentRightImage((prev) => 
        (prev + 1) % propertyData.featured_images.length
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [propertyData.featured_images]);

  const nextLeftImage = () => {
    if (!propertyData.regular_images || propertyData.regular_images.length === 0) return;
    setCurrentLeftImage((prev) => 
      (prev + 1) % propertyData.regular_images.length
    );
  };

  const prevLeftImage = () => {
    if (!propertyData.regular_images || propertyData.regular_images.length === 0) return;
    setCurrentLeftImage((prev) => 
      (prev - 1 + propertyData.regular_images.length) % propertyData.regular_images.length
    );
  };

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

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
    return <div className="py-16 md:py-24 bg-amber-50 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-16 md:py-24 bg-amber-50 relative">
      <div className="container mx-auto px-4">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full mb-4 text-sm font-medium"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Premium Retreat
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            {propertyData.title || 'Explore Our Premier Property'}
          </h2>
        </div>

        {/* Content Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Left Column - Regular Images Only */}
          <div className="flex flex-col h-full">
            {/* Regular Images Carousel */}
            <div className="relative w-full h-64 md:h-[400px] rounded-2xl overflow-hidden shadow-xl mb-8">
              {propertyData.regular_images.length > 0 && (
                <>
                  <img
                    src={propertyData.regular_images[currentLeftImage]?.url || '/placeholder.jpg'}
                    alt={propertyData.regular_images[currentLeftImage]?.alt || 'Property image'}
                    className="w-full h-full object-cover"
                  />

                  {propertyData.regular_images.length > 1 && (
                    <>
                      <button
                        onClick={prevLeftImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-600 p-2 rounded-full shadow-md z-10"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextLeftImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-amber-600 p-2 rounded-full shadow-md z-10"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                </>
              )}

              {/* Indicators */}
              {propertyData.regular_images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {propertyData.regular_images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentLeftImage === index ? "bg-white w-4" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Stats and Video */}
            <motion.div className="flex flex-col md:flex-row gap-6 mt-auto">
              {/* Stats */}
              <div className="flex flex-col items-start justify-around gap-4 bg-amber-500 rounded-2xl p-6">
                <div className="flex justify-center items-center gap-4">
                  <div className="bg-amber-700/50 p-3 rounded-full">
                    <CalendarDays className="w-6 h-6 text-amber-100" />
                  </div>
                  <div>
                    <h3 className="text-amber-100 text-2xl font-bold">
                      <CountUp end={propertyData.years_experience || 12} duration={3} />+
                    </h3>
                    <p className="text-amber-100 text-sm">Years of Excellence</p>
                  </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                  <div className="bg-amber-700/50 p-3 rounded-full">
                    <Users className="w-6 h-6 text-amber-100" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-amber-100">
                      <CountUp end={propertyData.happy_guests } duration={3} />+
                    </h3>
                    <p className="text-amber-100 text-sm">Happy Guests</p>
                  </div>
                </div>
              </div>

              {/* Video Button */}
              <motion.div
                className="flex-1 aspect-square relative rounded-xl overflow-hidden shadow-md"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={openVideo}
              >
                {propertyData.video_thumbnail ? (
                  <img
                    src={propertyData.video_thumbnail}
                    alt={propertyData.video_alt || 'Video thumbnail'}
                    className="w-full h-full object-cover brightness-75"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Play className="w-12 h-12 text-gray-400" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border-2 border-white">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white font-medium">
                  Watch Video Tour
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Featured Images Gallery */}
          {/* Right Column - Featured Images Only */}
          <div className="h-full">
            {propertyData.featured_images.length > 0 && (
              <motion.div
                className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img
                  src={propertyData.featured_images[currentRightImage]?.url || '/placeholder.jpg'}
                  alt={propertyData.featured_images[currentRightImage]?.alt || 'Featured property'}
                  className="w-full h-full object-cover"
                />

                {/* Indicators */}
                {propertyData.featured_images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {propertyData.featured_images.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentRightImage === index ? "bg-white w-4" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && propertyData.video_url && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-amber-400 transition-colors"
            >
              Close
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`${propertyData.video_url}?autoplay=1`}
              title={propertyData.video_alt || 'Property video tour'}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurFeatured;