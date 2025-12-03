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
      path: "/products/wooden-laminate",
      bgColor: "from-amber-900/80 to-amber-950/90",
      textColor: "text-amber-50",
      description: "Premium quality wooden laminate flooring for elegant interiors"
    },
    {
      id: 2,
      title: "GRASS CARPET",
      subtitle: "12 FT ROLL",
      image: "/media/grass-carpet.jpg",
      path: "/products/grass-carpet",
      bgColor: "from-green-900/80 to-green-950/90",
      textColor: "text-green-50",
      description: "Natural looking grass carpet for outdoor and indoor spaces"
    }
  ];

  const handleCardClick = (path) => {
    router.push(path);
  };

  const handleCardHover = (id) => {
    setHoveredCard(id);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-100 to-gray-200 my-10 bg-transparent">
      {/* Image Cards Container - Full width with no extra spacing */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] overflow-hidden">
        {/* Cards Grid - Full width container */}
        <div className="relative h-full flex flex-col md:flex-row">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative flex-1 h-1/2 md:h-full transition-all duration-700 ease-in-out overflow-hidden cursor-pointer
                ${hoveredCard === card.id ? 'md:flex-[3] z-10' : 'md:flex-1'}
                ${hoveredCard && hoveredCard !== card.id ? 'opacity-90 md:opacity-80' : 'opacity-100'}
                ${index === 0 ? 'md:rounded-r-none' : ''}
                ${index === cards.length - 1 ? 'md:rounded-l-none' : ''}
              `}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
              onClick={() => handleCardClick(card.path)}
            >
              {/* Background Image with Enhanced Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
                style={{ 
                  backgroundImage: `url('${card.image}')`,
                  transform: hoveredCard === card.id ? 'scale(1.15)' : 'scale(1.08)'
                }}
              >
                {/* Gradient Overlay - More prominent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bgColor} transition-opacity duration-500 ${
                  hoveredCard === card.id ? 'opacity-30' : 'opacity-50'
                }`}></div>
                
                {/* Additional Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              </div>

              {/* Content - Adjusted for better positioning */}
              <div className="relative h-full flex flex-col justify-end p-4 md:p-6 lg:p-8">
                {/* Title and Subtitle - Larger and bolder */}
                <div className={`transform transition-all duration-500 ${
                  hoveredCard === card.id ? 'translate-y-0' : 'translate-y-1'
                }`}>
                  <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-1 md:mb-2 ${card.textColor} drop-shadow-2xl tracking-tight`}>
                    {card.title}
                  </h3>
                  <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${card.textColor} opacity-95 drop-shadow-xl`}>
                    {card.subtitle}
                  </p>
                </div>

                {/* Description (Shows on hover) */}
                <div className={`mt-4 md:mt-6 transform transition-all duration-500 ${
                  hoveredCard === card.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <p className={`text-base sm:text-lg md:text-xl ${card.textColor} max-w-md lg:max-w-lg drop-shadow-lg font-medium`}>
                    {card.description}
                  </p>
                </div>

                {/* CTA Indicator (Shows on hover) */}
                <div className={`mt-4 md:mt-6 transform transition-all duration-500 delay-75 ${
                  hoveredCard === card.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className={`inline-flex items-center gap-2 ${card.textColor} bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full font-medium text-sm md:text-base`}>
                    <span>View Details</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Click Indicator - More subtle */}
              <div className={`absolute top-4 right-4 transform transition-all duration-300 ${
                hoveredCard === card.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}>
                <div className={`${card.textColor} bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium`}>
                  Click to explore
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider Line (Only on desktop) - More subtle */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/10 z-20"></div>
      </div>
    </div>
  );
}