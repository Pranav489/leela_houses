import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import axiosInstance from "../../services/api";
import {
  FiChevronLeft,
  FiChevronRight,
  FiX,
  FiGrid,
  FiLayers,
  FiImage,
} from "react-icons/fi";
import {
  FaSwimmingPool,
  FaUmbrellaBeach,
  FaTree,
  FaBed,
  FaUtensils,
  FaHiking,
} from "react-icons/fa";
import SEO from "../../components/SEO";

const GalleryPage = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid', 'masonry', 'carousel'
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAmenityImages, setSelectedAmenityImages] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");
  const [galleryData, setGalleryData] = useState(null);
  const [currentGuestExpIndex, setCurrentGuestExpIndex] = useState(0);
  const [showGuestExpSlider, setShowGuestExpSlider] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await axiosInstance.get('/gallery');
        setGalleryData(response.data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  // Categories for filtering
  const categories = [
    { id: "all", name: "All", icon: <FiImage className="mr-2" /> },
    { id: "property", name: "Property", icon: <FaTree className="mr-2" /> },
    { id: "rooms", name: "Rooms", icon: <FaBed className="mr-2" /> },
    { id: "pool", name: "Pool", icon: <FaSwimmingPool className="mr-2" /> },
    { id: "dining", name: "Dining", icon: <FaUtensils className="mr-2" /> },
    {
      id: "activities",
      name: "Activities",
      icon: <FaHiking className="mr-2" />,
    },
  ];

  // Get filtered images based on category
  const getFilteredImages = () => {
    if (!galleryData) return [];

    if (currentCategory === "all") {
      return galleryData.gallery_images || [];
    }

    return galleryData.gallery_images.filter(
      (img) => img.category === currentCategory
    );
  };

  const filteredImages = getFilteredImages();

  const navigateImage = (direction) => {
    if (!selectedAmenityImages) return;

    const currentIndex = selectedAmenityImages.findIndex(
      (img) => img === selectedImage.url
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? selectedAmenityImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === selectedAmenityImages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage({ url: selectedAmenityImages[newIndex] });
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
      <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Error loading gallery: {error}</p>
        </div>
      </div>
    );
  }

  if (!galleryData) {
    return (
      <div className="min-h-screen bg-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-orange-800">No gallery content available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">

      <SEO
  title="Resort Gallery | Explore Leela Farmhouse Resort"
  description="Take a visual tour of Leela Farmhouse. Explore our farmhouse resort gallery featuring luxury rooms, nature views, organic dining, wedding venues, and guest experiences."
/>
      {/* Gallery Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-orange-800 mb-4">
          Leela Farmhouse Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our beautiful property, comfortable accommodations, and exciting activities
        </p>
      </motion.div>

      {/* Gallery Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${currentCategory === category.id
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* View Mode Toggle */}
        <div className="flex gap-2 bg-white p-1 rounded-full shadow-sm">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-full ${viewMode === "grid" ? "bg-orange-600 text-white" : "text-gray-700"
              }`}
            title="Grid View"
          >
            <FiGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode("masonry")}
            className={`p-2 rounded-full ${viewMode === "masonry"
              ? "bg-orange-600 text-white"
              : "text-gray-700"
              }`}
            title="Masonry View"
          >
            <FiLayers size={20} />
          </button>
          <button
            onClick={() => setViewMode("carousel")}
            className={`p-2 rounded-full ${viewMode === "carousel"
              ? "bg-orange-600 text-white"
              : "text-gray-700"
              }`}
            title="Carousel View"
          >
            <FiImage size={20} />
          </button>
        </div>
      </div>

      {/* Gallery Content */}
      {viewMode === "carousel" ? (
        <CarouselView images={filteredImages} onImageClick={setSelectedImage} />
      ) : viewMode === "masonry" ? (
        <MasonryView images={filteredImages} onImageClick={setSelectedImage} />
      ) : (
        <GridView images={filteredImages} onImageClick={setSelectedImage} />
      )}

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null);
            setSelectedAmenityImages(null);
          }}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
              onClick={() => {
                setSelectedImage(null);
                setSelectedAmenityImages(null);
              }}
            >
              <FiX size={24} />
            </button>

            <div className="relative">
              <img
                src={selectedImage.url}
                alt="Enlarged view"
                className="max-h-[80vh] w-full object-contain mx-auto"
              />

              {selectedAmenityImages && selectedAmenityImages.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("prev");
                    }}
                  >
                    <FiChevronLeft size={24} />
                  </button>

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage("next");
                    }}
                  >
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {selectedAmenityImages && (
              <div className="mt-4 text-center text-white">
                <p className="text-sm">
                  Image{" "}
                  {selectedAmenityImages.findIndex(
                    (img) => img === selectedImage.url
                  ) + 1}{" "}
                  of {selectedAmenityImages.length}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Amenities Highlights */}
      {galleryData.amenities_highlights && galleryData.amenities_highlights.length > 0 && (
        <section id="amenities" className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
            Amenities Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryData.amenities_highlights.map((amenity, index) => {
              // Get the appropriate icon based on the selected icon type
              const getIcon = () => {
                switch (amenity.icon) {
                  case 'pool':
                    return <FaSwimmingPool className="text-4xl text-orange-600 mb-4" />;
                  case 'bed':
                    return <FaBed className="text-4xl text-orange-600 mb-4" />;
                  case 'utensils':
                    return <FaUtensils className="text-4xl text-orange-600 mb-4" />;
                  case 'tree':
                    return <FaTree className="text-4xl text-orange-600 mb-4" />;
                  case 'hiking':
                    return <FaHiking className="text-4xl text-orange-600 mb-4" />;
                  default:
                    return <FaTree className="text-4xl text-orange-600 mb-4" />;
                }
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={amenity.images[0]} // Use the first image from amenity.images
                      alt={amenity.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <h3 className="text-xl font-bold text-white">
                        {amenity.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex justify-center">{getIcon()}</div>
                    <p className="text-gray-600 text-center mb-4">{amenity.description}</p>

                    {/* Only show images specific to this amenity */}
                    {amenity.images && amenity.images.length > 0 && (
                      <div className="flex gap-2 justify-center">
                        {amenity.images.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => {
                              setSelectedAmenityImages(amenity.images);
                              setSelectedImage({ url: img });
                            }}
                            className="w-16 h-16 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                          >
                            <img
                              src={img}
                              alt={`${amenity.title} thumbnail ${i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Overlapping Photo Section - Guest Experiences */}
      {galleryData.guest_experiences && galleryData.guest_experiences.length > 0 && (
        <section className="mt-16 max-w-6xl mx-auto relative">
          <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
            Guest Experiences
          </h2>

          <div className="relative h-96">
            {galleryData.guest_experiences.map((experience, index) => {
              const getPositionClass = () => {
                if (index === 0) return "absolute left-0 top-0 w-3/4 h-3/4 z-10 shadow-xl";
                if (index === 1) return "absolute right-0 top-1/4 w-1/2 h-3/4 z-20 shadow-xl";
                return "absolute left-1/4 bottom-0 w-2/3 h-2/3 z-30 shadow-xl";
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`${getPositionClass()} rounded-lg overflow-hidden cursor-pointer hover:z-40 hover:scale-105 transition-transform duration-300`}
                  onClick={() => {
                    setCurrentGuestExpIndex(index);
                    setShowGuestExpSlider(true);
                  }}
                >
                  <img
                    src={experience.url}
                    alt={`Guest experience ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              );
            })}
          </div>
        </section>
      )}
      {/* Guest Experiences Slider Modal */}
      {showGuestExpSlider && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowGuestExpSlider(false)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
              onClick={() => setShowGuestExpSlider(false)}
            >
              <FiX size={24} />
            </button>

            <div className="relative h-[80vh]">
              <img
                src={galleryData.guest_experiences[currentGuestExpIndex].url}
                alt={`Guest experience ${currentGuestExpIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {galleryData.guest_experiences.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentGuestExpIndex(prev =>
                        prev === 0 ? galleryData.guest_experiences.length - 1 : prev - 1
                      );
                    }}
                  >
                    <FiChevronLeft size={24} />
                  </button>

                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentGuestExpIndex(prev =>
                        prev === galleryData.guest_experiences.length - 1 ? 0 : prev + 1
                      );
                    }}
                  >
                    <FiChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 text-center text-white">
              <p className="text-sm">
                Image {currentGuestExpIndex + 1} of {galleryData.guest_experiences.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Gallery View Components
const GridView = ({ images, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          viewport={{ once: true }}
          className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <p className="text-white font-medium">View Details</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const MasonryView = ({ images, onImageClick }) => {
  // Create a masonry layout by varying image heights
  const getRandomHeight = () => {
    const heights = ["h-64", "h-80", "h-96"];
    return heights[Math.floor(Math.random() * heights.length)];
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          viewport={{ once: true }}
          className={`mb-4 break-inside-avoid rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${getRandomHeight()}`}
          onClick={() => onImageClick(image)}
        >
          <img
            src={image.url}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

const CarouselView = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl">
      <div className="relative h-96">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              x: `${(index - currentIndex) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${index === currentIndex ? "z-10" : "z-0"
              }`}
            onClick={() => onImageClick(image)}
          >
            <img
              src={image.url}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </motion.div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 z-20 hover:bg-opacity-100"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 z-20 hover:bg-opacity-100"
      >
        <FiChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex
              ? "bg-orange-600"
              : "bg-white bg-opacity-50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
