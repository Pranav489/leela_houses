import React, { useState } from "react";
import { motion } from "framer-motion";
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

const GalleryPage = () => {
  const [viewMode, setViewMode] = useState("grid"); // 'grid', 'masonry', 'carousel'
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  // Gallery images by category (using Unsplash)
  const galleryData = {
    all: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "property",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "rooms",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "pool",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "dining",
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "activities",
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "property",
      },
      {
        id: 7,
        url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "rooms",
      },
      {
        id: 8,
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "pool",
      },
      {
        id: 9,
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "dining",
      },
      {
        id: 10,
        url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "activities",
      },
      {
        id: 11,
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "property",
      },
      {
        id: 12,
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "rooms",
      },
    ],
    property: [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 6,
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 11,
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
    rooms: [
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 7,
        url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 12,
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
    pool: [
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 8,
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
    dining: [
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 9,
        url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
    activities: [
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
      {
        id: 10,
        url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      },
    ],
  };

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

  const filteredImages =
    currentCategory === "all" ? galleryData.all : galleryData[currentCategory];

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
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
          Explore our beautiful property, comfortable accommodations, and
          exciting activities
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
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                currentCategory === category.id
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
            className={`p-2 rounded-full ${
              viewMode === "grid" ? "bg-orange-600 text-white" : "text-gray-700"
            }`}
            title="Grid View"
          >
            <FiGrid size={20} />
          </button>
          <button
            onClick={() => setViewMode("masonry")}
            className={`p-2 rounded-full ${
              viewMode === "masonry"
                ? "bg-orange-600 text-white"
                : "text-gray-700"
            }`}
            title="Masonry View"
          >
            <FiLayers size={20} />
          </button>
          <button
            onClick={() => setViewMode("carousel")}
            className={`p-2 rounded-full ${
              viewMode === "carousel"
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
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -right-4 -top-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
              onClick={() => setSelectedImage(null)}
            >
              <FiX size={24} />
            </button>

            <div className="relative">
              <img
                src={selectedImage.url}
                alt="Enlarged view"
                className="max-h-[80vh] w-full object-contain mx-auto"
              />

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
            </div>

            <div className="mt-4 text-center text-white">
              <p className="text-sm">
                Image{" "}
                {filteredImages.findIndex(
                  (img) => img.id === selectedImage.id
                ) + 1}{" "}
                of {filteredImages.length}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Amenities Highlights */}
      <section className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
          Amenities Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Swimming Pool",
              icon: (
                <FaSwimmingPool className="text-4xl text-orange-600 mb-4" />
              ),
              images: galleryData.pool.slice(0, 3),
              desc: "Our chemical-free natural pool with panoramic views",
            },
            {
              title: "Luxury Rooms",
              icon: <FaBed className="text-4xl text-orange-600 mb-4" />,
              images: galleryData.rooms.slice(0, 3),
              desc: "Comfortable accommodations with modern amenities",
            },
            {
              title: "Dining Experience",
              icon: <FaUtensils className="text-4xl text-orange-600 mb-4" />,
              images: galleryData.dining.slice(0, 3),
              desc: "Farm-to-table meals with local flavors",
            },
          ].map((amenity, index) => (
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
                  src={amenity.images[0].url}
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
                <div className="flex justify-center">{amenity.icon}</div>
                <p className="text-gray-600 text-center mb-4">{amenity.desc}</p>

                <div className="flex gap-2 justify-center">
                  {amenity.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className="w-16 h-16 rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img
                        src={img.url}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overlapping Photo Section */}
      <section className="mt-16 max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold text-orange-800 mb-8 text-center">
          Guest Experiences
        </h2>

        <div className="relative h-96">
          {[
            {
              url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              className: "absolute left-0 top-0 w-3/4 h-3/4 z-10 shadow-xl",
            },
            {
              url: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              className: "absolute right-0 top-1/4 w-1/2 h-3/4 z-20 shadow-xl",
            },
            {
              url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              className:
                "absolute left-1/4 bottom-0 w-2/3 h-2/3 z-30 shadow-xl",
            },
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className={`${img.className} rounded-lg overflow-hidden cursor-pointer hover:z-40 hover:scale-105 transition-transform duration-300`}
              onClick={() => setSelectedImage({ id: index, url: img.url })}
            >
              <img
                src={img.url}
                alt={`Guest experience ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
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
            className={`absolute inset-0 ${
              index === currentIndex ? "z-10" : "z-0"
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
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
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
