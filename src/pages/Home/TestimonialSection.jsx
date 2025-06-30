import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axiosInstance from "../../services/api";

const TestimonialSection = () => {
  const [testimonialData, setTestimonialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await axiosInstance.get('/testimonials/featured');
        setTestimonialData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialData();
  }, []);

  const scrollTestimonials = (direction) => {
    if (testimonialsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      testimonialsRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

  if (!testimonialData) {
    return (
      <div className="py-12 md:py-50 bg-amber-50 flex justify-center items-center h-64">
        No data available
      </div>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Our Guests Say
        </motion.h2>

        <motion.div
          className="h-1 w-16 bg-amber-500 mx-auto mb-12"
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        />

        <div className="relative">
          <button
            onClick={() => scrollTestimonials("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollTestimonials("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-md hidden md:block transition-transform hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={testimonialsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
          >
            {testimonialData.map((client) => (
              <motion.div
                key={client.id}
                className="min-w-[300px] sm:min-w-[350px] bg-white rounded-xl shadow-lg overflow-hidden border border-amber-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={client.image_url}
                        alt={client.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{client.name}</h4>
                      <p className="text-sm text-amber-600">{client.purpose}</p>
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <svg
                      className="w-8 h-8 text-amber-200 absolute -top-6 -left-2"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-gray-600 italic pl-6">
                      "{client.quote}"
                    </p>
                    <svg
                      className="w-8 h-8 text-amber-200 absolute -bottom-4 -right-2"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M22.648 28c4.896-3.456 8.352-9.12 8.352-15.36 0-5.088-3.072-8.064-6.624-8.064-3.36 0-5.856 2.688-5.856 5.856 0 3.168 2.208 5.472 5.088 5.472.576 0 1.344-.096 1.536-.192-.48 3.264-3.552 7.104-6.624 9.024L22.648 28zm-16.512 0c4.8-3.456 8.256-9.12 8.256-15.36 0-5.088-3.072-8.064-6.624-8.064-3.264 0-5.856 2.688-5.856 5.856 0 3.168 2.304 5.472 5.184 5.472.576 0 1.248-.096 1.44-.192-.48-3.264-3.456-7.104-6.528-9.024L6.136 28z" />
                    </svg>
                  </div>
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < client.rating ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;