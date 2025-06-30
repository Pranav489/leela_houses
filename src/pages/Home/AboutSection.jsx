import React from "react";
import { useEffect,useState } from "react";
import axiosInstance from "../../services/api";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const AboutSection = () => {

   const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axiosInstance.get('/our-story');
        setAboutData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="py-12 md:py-50 bg-amber-50 flex justify-center items-center h-64">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 md:py-50 bg-amber-50 flex justify-center items-center h-64">
        Error: {error}
      </div>
    );
  }

  if (!aboutData) {
    return (
      <div className="py-12 md:py-50 bg-amber-50 flex justify-center items-center h-64">
        No data available
      </div>
    );
  }

  return (
    <section className="py-12 md:py-50 bg-amber-50 relative ">
      <div className="relative container mx-auto px-4 md:px-6">
        {/* Mobile Top Image (hidden on desktop) */}
        <motion.div
          className="block lg:hidden w-full h-64 rounded-2xl overflow-hidden shadow-xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
           <img
            src={`${aboutData.image2_url}`}
            alt="Leela Farmhouse exterior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-12">
          {/* Desktop Image (hidden on mobile) */}
          <motion.div
            className="hidden lg:block w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="z-10 w-full h-80 md:h-[700px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${aboutData.image1_url}`}
                alt="Leela Farmhouse exterior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full lg:w-1/2 px-2 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-800 mb-4">
              Our Story
            </h2>
             <div className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base whitespace-pre-line">
              {aboutData.story}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              {/* Video CTA */}
              {aboutData.video_url && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  <a
                    href={aboutData.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 sm:gap-3 bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                  >
                    <div className="bg-white/20 p-1 sm:p-2 rounded-full">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="font-medium">Watch our Story</span>
                  </a>
                </motion.div>
              )}

              {/* Signature */}
              <div className="flex items-center gap-3 sm:gap-4">
                {aboutData.founder_image_url && (
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full overflow-hidden border-2 border-amber-600">
                    <img
                      src={`${aboutData.founder_image_url}`}
                      alt="Founder"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    {aboutData.founder_name}
                  </p>
                  <p className="text-xs sm:text-sm text-amber-600">
                    {aboutData.founder_position}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Overlapping Image */}
        {aboutData.image1_url && (
          <motion.div
            className="relative lg:absolute mx-auto lg:mx-0 mt-8 lg:mt-0 md:-bottom-40 lg:right-10 w-full lg:w-2/3 h-64 lg:h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={`${aboutData.image2_url}`}
              alt={aboutData.overlap_image_alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
