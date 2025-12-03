"use client";

import { useState, useEffect } from 'react';

export default function ThreeCardSlider({ data, interval = 3000, title = "Featured Collections", subtitle = "Discover our handpicked selection of premium wallpapers", imageWidth = "w-full", cols="3" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = data || [];

  // Auto Slide
  useEffect(() => {
    if (categories.length === 0) return;

    const autoSlide = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [categories.length, interval]);

  const goToSlide = (index) => setCurrentIndex(index);
  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % categories.length);

  return (
    <div className={`${imageWidth} overflow-x-hidden mx-auto px-4 py-12 bg-transparent`}>

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Cards */}
      <div className="relative">
        {/* <div className={`grid grid-cols-1 md:grid-${cols} gap-6 md:gap-8`}> */}
        <div
  className={`grid gap-6 md:gap-8 
    ${cols === 1 && "md:grid-cols-1"}
    ${cols === 2 && "md:grid-cols-2"}
    ${cols === 3 && "md:grid-cols-3"}
    ${cols === 4 && "md:grid-cols-4"}
  `}
>
          {categories.map((item, index) => (
            <div
              key={item.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                index === currentIndex ? "transform scale-105" : "opacity-80"
              }`}
              onClick={() => goToSlide(index)}
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                {/* Pulse Indicator */}
                {index === currentIndex && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {/* Underline */}
                <div
                  className={`h-1 w-16 mx-auto mt-2 transition-all duration-500 ${
                    index === currentIndex
                      ? "bg-yellow-400 w-24"
                      : "bg-gray-300"
                  }`}
                />

                <p className="text-gray-600 mt-3 text-sm">{item.description}</p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-yellow-400/30 transition pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? "bg-yellow-400 w-8" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
