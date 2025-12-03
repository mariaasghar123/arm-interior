"use client";

import React from "react";

export default function FourCards() {
  const cards = [
    {
      id: 1,
      title: "Korean Wallpapers",
      bgImage: "/media/wall1.webp",
      description: "Contemporary designs for modern interiors"
    },
    {
      id: 2,
      title: "Wall Pictures",
      bgImage: "/media/wall2.webp",
      description: "Traditional patterns with elegant touch"
    },
    {
      id: 3,
      title: "China Wallpapers",
      bgImage: "/media/wall3.webp",
      description: "Rich textures for depth and dimension"
    },
    {
      id: 4,
      title: "Wall Tiles & Sheet",
      bgImage: "/media/wall4.webp",
      description: "Luxury wallpapers for elite spaces"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id}
            className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-transparent"
          >
            {/* Background Image */}
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.bgImage}')` }}
            />
            {/* Title OUTSIDE Image */}
            <div className="p-4">
              <h3 className="text-xl text-gray-900">
                {card.title}
              </h3>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
