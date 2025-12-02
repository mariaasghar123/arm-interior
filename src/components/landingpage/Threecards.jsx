"use client";

import { useState, useEffect } from 'react';

const categories = [
  {
    id: 1,
    title: "New Arrivals",
    image: "/media/card1.webp",
    description: "Latest designs and trends"
  },
  {
    id: 2,
    title: "Best Sellers",
    image: "/media/card2.webp",
    description: "Most popular choices"
  },
  {
    id: 3,
    title: "Premium Collection",
    image: "/media/card3.webp",
    description: "Exclusive high-end designs"
  }
];

export default function ThreeCardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % categories.length
    );
  };

  return (
    <div className="w-full overflow-x-hidden mx-auto px-4 py-12 bg-transparent">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Collections
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium wallpapers
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                index === currentIndex ? 'transform scale-105' : 'opacity-80'
              }`}
              onClick={() => goToSlide(index)}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-80  overflow-hidden mb-4">
                {/* Background Image */}
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Active Indicator */}
                {index === currentIndex && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>

              {/* Title with Underline */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                
                {/* Underline Border */}
                <div className={`h-1 w-16 mx-auto transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-yellow-400 w-24' 
                    : 'bg-gray-300 group-hover:bg-yellow-300'
                }`}></div>
                
                {/* Description */}
                <p className="text-gray-600 mt-2 text-sm">
                  {category.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-yellow-400/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center items-center gap-3 mt-10">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-yellow-400 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}