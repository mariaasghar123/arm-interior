"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ThreeCardSlider({
  data,
  interval = 3000,
  title = "Featured Collections",
  subtitle = "Discover our handpicked selection of premium wallpapers",
  cols = "3",
}) {
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

  return (
    <div className="overflow-hidden w-full max-w-[1700px] mx-auto px-4 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Responsive Grid */}
      <div
        className={`
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-${cols}
        `}
      >
        {categories.map((item, index) => {
          const Card = (
            <div
              className={`
                relative group cursor-pointer
                transition-all duration-300
                ${index === currentIndex ? "md:scale-105" : "md:opacity-80"}
              `}
            >
              {/* Image */}
              <div className="relative h-52 sm:h-64 md:h-80 overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* Title */}
              <div className="text-center mt-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div
                  className={`h-1 w-14 mx-auto mt-2 transition-all duration-500 ${
                    index === currentIndex ? "bg-yellow-400 w-20" : "bg-gray-300"
                  }`}
                />

                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-yellow-400/40 transition pointer-events-none"></div>
            </div>
          );

          return item.link ? (
            <Link key={item.id} href={item.link}>
              {Card}
            </Link>
          ) : (
            <div key={item.id}>{Card}</div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition ${
              index === currentIndex ? "bg-yellow-400 w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
