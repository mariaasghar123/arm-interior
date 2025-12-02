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
      title: "China Wallpaper 27",
      originalPrice: "Rs 2,200",
      discountedPrice: "Rs 1,650",
      image: "/media/p5.webp",
      description: "Textured finish with geometric patterns",
      badge: "Sale",
    },
    {
      id: 6,
      title: "China Wallpaper 40",
      originalPrice: "Rs 2,800",
      discountedPrice: "Rs 2,100",
      image: "/media/p6.webp",
      description: "Premium silk finish wallpaper",
      badge: "Sale",
    },
  ];

  const visible = 3;
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
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-6xl text-gray-900 inline-block relative">
          <span className="font-bold">Explore Our </span>
          <span className="border-b-4 border-yellow-500">Exclusive</span>{" "}
          <span className="font-bold">Collection</span>
        </h1>
      </div>

      {/* Slider Container */}
      <div
        className="relative overflow-hidden py-4"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white w-12 h-12 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition z-10"
        >
          <i className="fas fa-chevron-left"></i>
        </button>

        {/* Slider Track */}
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
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 w-1/3 flex flex-col relative overflow-hidden group"
                    >
                      {/* Image Section with Action Buttons */}
                      <div className="relative w-full h-60 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* SALE Badge */}
                        {product.badge && (
                          <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                            {product.badge}
                          </span>
                        )}
                        {/* Action Buttons - Positioned at bottom of image */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {/* Add to Cart Button */}
                          <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition hover:scale-110 shadow-lg">
                            <i className="fas fa-cart-plus text-lg"></i>
                          </button>

                          {/* View Detail Button */}
                          <button className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition hover:scale-110 shadow-lg">
                            <i className="fas fa-eye text-lg"></i>
                          </button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Title */}
                        <h3 className="text-xl text-black font-semibold mb-3">
                          {product.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {product.description}
                        </p>

                        {/* Price Section */}
                        <div className="mt-auto">
                          <span className="line-through text-gray-500 text-lg block">
                            {product.originalPrice}
                          </span>
                          <span className="text-black text-2xl font-bold">
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

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white w-12 h-12 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition z-10"
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
            className={`w-4 h-4 rounded-full ${
              i === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-300"
            } transition`}
          />
        ))}
      </div>

      {/* All Products Button */}
      <div className="text-center mt-8">
        <button className="bg-black text-white py-3 px-10 rounded-full text-lg font-semibold hover:bg-gray-800 transition flex items-center justify-center gap-2 mx-auto">
          <i className="fas fa-th-large"></i>
          View All Products
        </button>
      </div>
    </div>
  );
}
