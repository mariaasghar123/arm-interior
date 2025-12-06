"use client";

import React from "react";
import Link from "next/link";

export default function FourCards({
  data = [],
  cardWidth = "w-full",
  showLine = true,
  lineColor = "",
  cols = 4
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">

      {/* GRID SYSTEM */}
      <div
        className={`grid gap-6 
          grid-cols-1
          sm:grid-cols-2
          ${cols >= 3 ? "md:grid-cols-3" : ""}
          ${cols >= 4 ? "lg:grid-cols-4" : ""}
        `}
      >
        {data.map((card) => {
          const CardContent = (
            <div className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white rounded-xl ${cardWidth}`}>

              {/* Image */}
              <div
                className="w-full h-52 sm:h-60 md:h-64 bg-cover bg-center rounded-t-xl"
                style={{ backgroundImage: `url('${card.bgImage}')` }}
              />

              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>

                {/* Bottom line */}
                {showLine && (
                  <div className={`h-[1px] w-full mt-2 bg-gray-300 ${lineColor}`}></div>
                )}
              </div>
            </div>
          );

          // clickable card
          return card.link ? (
            <Link key={card.id} href={card.link} className="block">
              {CardContent}
            </Link>
          ) : (
            <div key={card.id}>{CardContent}</div>
          );
        })}
      </div>
    </div>
  );
}
