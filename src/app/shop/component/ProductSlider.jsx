"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      id: 1,
      title: "China Wallpaper 30",
      originalPrice: "Rs 2,000",
      discountedPrice: "Rs 1,500",
      image: "/media/p1.webp",
      description: "Premium quality wallpaper with modern design",
      badge: "Sale",
    },
    {
      id: 2,
      title: "China Wallpaper 22",
      originalPrice: "Rs 2,000",
      discountedPrice: "Rs 1,500",
      image: "/media/p2.webp",
      description: "Elegant pattern for contemporary interiors",
      badge: "Sale",
    },
    {
      id: 3,
      title: "China Wallpaper 35",
      originalPrice: "Rs 2,500",
      discountedPrice: "Rs 1,800",
      image: "/media/p3.webp",
      description: "Luxury finish with metallic accents",
      badge: "Sale",
    },
    {
      id: 4,
      title: "China Wallpaper 18",
      originalPrice: "Rs 1,800",
      discountedPrice: "Rs 1,350",
      image: "/media/p4.webp",
      description: "Minimalist design for modern spaces",
      badge: "Sale",
    },
    {
      id: 5,
      title: "China Wallpaper 30",
      originalPrice: "Rs 2,000",
      discountedPrice: "Rs 1,500",
      image: "/media/p1.webp",
      description: "Premium quality wallpaper with modern design",
      badge: "Sale",
    },
    {
      id: 6,
      title: "China Wallpaper 22",
      originalPrice: "Rs 2,000",
      discountedPrice: "Rs 1,500",
      image: "/media/p2.webp",
      description: "Elegant pattern for contemporary interiors",
      badge: "Sale",
    },
  ];

  // ---- RESPONSIVE SLIDES COUNT ----
  const getVisibleSlides = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 768) return 1;     // Mobile
    if (window.innerWidth < 1024) return 2;    // Tablet
    return 3;                                  // Desktop
  };

  const [visible, setVisible] = useState(getVisibleSlides());

  useEffect(() => {
    const handleResize = () => setVisible(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / visible);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-gray-900 font-bold">
          Explore Our <span className="border-b-4 border-yellow-500">Exclusive</span> Collection
        </h1>
      </div>

      <div
        className="relative overflow-hidden py-4"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Left */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 md:w-12 md:h-12 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Track */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex flex-none w-full gap-6 justify-center px-4"
              >
                {products
                  .slice(slideIndex * visible, (slideIndex + 1) * visible)
                  .map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 
                      w-full md:w-1/2 lg:w-1/3 flex flex-col relative overflow-hidden group"
                    >
                      {/* Image */}
                      <div className="relative w-full h-56 md:h-60 lg:h-64 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Badge */}
                        {product.badge && (
                          <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {product.badge}
                          </span>
                        )}

                        {/* Hover Buttons */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-100 md:opacity-0 group-hover:opacity-100 transition">
                          <button className="bg-black text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition hover:scale-110 shadow-lg">
                            <i className="fas fa-cart-plus"></i>
                          </button>
                          <button className="bg-black text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition hover:scale-110 shadow-lg">
                            <i className="fas fa-eye"></i>
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <h3 className="text-lg md:text-xl text-black font-semibold mb-3">
                          {product.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {product.description}
                        </p>

                        <div className="mt-auto">
                          <span className="line-through text-gray-500 block">
                            {product.originalPrice}
                          </span>
                          <span className="text-black text-xl md:text-2xl font-bold">
                            {product.discountedPrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white w-10 h-10 md:w-12 md:h-12 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition z-10"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8 mb-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
              i === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-300"
            } transition`}
          />
        ))}
      </div>

      {/* All Products */}
      <div className="text-center">
        <button className="bg-black text-white py-3 px-10 rounded-full text-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 mx-auto">
          <i className="fas fa-th-large"></i> View All Products
        </button>
      </div>
    </div>
  );
}
