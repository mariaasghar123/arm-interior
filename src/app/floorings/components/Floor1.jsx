"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Floor1() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "WOODEN LAMINATE",
      subtitle: "8 X 48 FLOOR",
      image: "/media/wooden-laminate.jpg",
      path: "/wooden-laminate-8-x-48-floor",
      bgColor: "from-amber-900/80 to-amber-950/90",
      textColor: "text-amber-50",
      description:
        "Premium quality wooden laminate flooring for elegant interiors",
    },
    {
      id: 2,
      title: "GRASS CARPET",
      subtitle: "12 FT ROLL",
      image: "/media/grass-carpet.jpg",
      path: "/grass-carpet",
      bgColor: "from-green-900/80 to-green-950/90",
      textColor: "text-green-50",
      description:
        "Natural looking grass carpet for outdoor and indoor spaces",
    },
  ];

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="w-full bg-gray-100 my-10">
      <div className="relative w-full h-auto md:h-[400px] overflow-hidden">
        <div className="relative flex flex-col md:flex-row h-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`
                group relative flex-1 h-[280px] sm:h-[320px] md:h-full 
                overflow-hidden cursor-pointer transition-all duration-700
                ${hoveredCard === card.id ? "md:flex-[2]" : "md:flex-1"}
              `}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(card.path)}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                style={{
                  backgroundImage: `url('${card.image}')`,
                  transform:
                    hoveredCard === card.id
                      ? "scale(1.15)"
                      : "scale(1.08)",
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} 
                    transition-opacity duration-500 
                    ${hoveredCard === card.id ? "opacity-30" : "opacity-50"}
                  `}
                ></div>

                {/* Extra overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="relative h-full flex flex-col justify-end p-4 sm:p-6">
                <h3
                  className={`font-black tracking-tight drop-shadow-2xl
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    ${card.textColor}
                  `}
                >
                  {card.title}
                </h3>

                <p
                  className={`text-lg sm:text-xl md:text-2xl font-semibold ${card.textColor}`}
                >
                  {card.subtitle}
                </p>

                {/* Description (Desktop hover only) */}
                <p
                  className={`hidden md:block mt-4 max-w-md text-base md:text-lg 
                    drop-shadow-xl transition-all duration-500
                    ${hoveredCard === card.id ? "opacity-100" : "opacity-0"}
                    ${card.textColor}
                  `}
                >
                  {card.description}
                </p>

                {/* CTA Button */}
                <div
                  className={`hidden md:inline-flex items-center gap-2 bg-black/30 
                    backdrop-blur-md px-4 py-2 rounded-full mt-4
                    transition-all duration-500
                    ${hoveredCard === card.id ? "opacity-100" : "opacity-0"}
                    ${card.textColor}
                  `}
                >
                  <span>View Details</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider (Desktop only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/20"></div>
      </div>
    </div>
  );
}
