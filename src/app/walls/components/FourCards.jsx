"use client";

import React from "react";

export default function FourCards({
  data = [],
  cardWidth = "w-full", // dynamic width
  showLine = true,      // bottom line show/hide
  lineColor = "", // bottom line color
  cols="4"

}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

      {/* Cards Grid */}
      <div  className={`grid gap-6 md:gap-8 
    ${cols === 1 && "md:grid-cols-1"}
    ${cols === 2 && "md:grid-cols-2"}
    ${cols === 3 && "md:grid-cols-3"}
    ${cols === 4 && "md:grid-cols-4"}
  `}>

        {data.map((card) => (
          <div 
            key={card.id}
            className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-transparent ${cardWidth}`}
          >

            {/* Background Image */}
            <div 
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: `url('${card.bgImage}')` }}
            />

            {/* Title + Bottom Line */}
            <div className="p-4">
              <h3 className="text-xl text-gray-900 font-medium">
                {card.title}
              </h3>

              {/* BOTTOM LINE */}
              {showLine && (
                <div className={`h-[0.5px] w-80 mt-3  ${lineColor}`}></div>
              )}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
