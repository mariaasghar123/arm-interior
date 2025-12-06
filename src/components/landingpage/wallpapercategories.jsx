"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const wallpaperCategories = [
  {
    id: 1,
    title: 'New Arrivals',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/new-arrival-5.webp',
    link: '/wallpapers/new-arrivals',

  },
  {
    id: 2,
    title: 'ORIGINAL JUTE WALLPAPER',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/new4.webp'
  },
  {
    id: 3,
    title: 'WALL TILES & SHEET',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/new.webp'
  },
  {
    id: 4,
    title: 'TEXTURE & STRIPES',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/bg1.webp'
  },
  {
    id: 5,
    title: '3D 4D 5D WALLPAPERS',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/new2.webp'
  },
  {
    id: 6,
    title: 'BRICKS & STONE',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/new3.webp'
  },
  {
    id: 7,
    title: 'GEOMETRICAL & ABSTRACT',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/new4.webp'
  },
  {
    id: 8,
    title: 'MOTIVES & DAMASK',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/new.webp'
  },
  {
    id: 9,
    title: 'SALE WALLPAPERS',
    bgColor: 'bg-transparent',
    textColor: 'text-white',
    image: '/media/bg1.webp'
  }
];

export default function WallpaperGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [screenSize, setScreenSize] = useState('desktop');
  const autoSlideRef = useRef(null);
  const totalSlides = wallpaperCategories.length;

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Set visible slides based on screen size
  const visibleSlides = screenSize === 'mobile' ? 1 : screenSize === 'tablet' ? 2 : 3;

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;

    autoSlideRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (totalSlides - visibleSlides + 1)
      );
    }, 3000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isPaused, totalSlides, visibleSlides]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - visibleSlides : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (totalSlides - visibleSlides + 1)
    );
  };

  const handleCardClick = (id) => {
    console.log(`Clicked category ${id}`);
  };

  // Get responsive card dimensions
  const getCardDimensions = () => {
    switch(screenSize) {
      case 'mobile':
        return { width: '280px', height: '200px' };
      case 'tablet':
        return { width: '320px', height: '220px' };
      default:
        return { width: '380px', height: '280px' };
    }
  };

  // Function to determine tilt based on position and screen size
  const getCardStyle = (index) => {
    const visibleIndexes = [];
    for (let i = 0; i < visibleSlides; i++) {
      visibleIndexes.push((currentIndex + i) % totalSlides);
    }

    const cardIndex = visibleIndexes.findIndex(i => i === index);
    
    if (cardIndex === -1) return {}; // Not visible
    
    const cardDims = getCardDimensions();
    const isCenter = cardIndex === Math.floor(visibleSlides / 2);
    const isLeft = cardIndex === 0;
    const isRight = cardIndex === visibleSlides - 1;

    // Mobile: Single card, no tilt
    if (screenSize === 'mobile') {
      return {
        transform: 'perspective(1000px) rotateY(0deg) scale(1)',
        zIndex: 30,
        opacity: 1,
        left: '50%',
        translate: '-50% 0',
        width: cardDims.width,
        height: cardDims.height
      };
    }

    // Tablet: 2 cards with slight tilt
    if (screenSize === 'tablet') {
      if (isLeft) {
        return {
          transform: 'perspective(1000px) rotateY(10deg) scale(0.9)',
          zIndex: 20,
          opacity: 0.85,
          left: '30%',
          translate: '-100% 0',
          width: cardDims.width,
          height: cardDims.height
        };
      } else if (isRight) {
        return {
          transform: 'perspective(1000px) rotateY(-10deg) scale(0.9)',
          zIndex: 20,
          opacity: 0.85,
          left: '70%',
          translate: '0 0',
          width: cardDims.width,
          height: cardDims.height
        };
      }
    }

    // Desktop: 3 cards with tilt
    if (screenSize === 'desktop') {
      if (isCenter) {
        return {
          transform: 'perspective(1000px) rotateY(0deg) scale(1)',
          zIndex: 30,
          opacity: 1,
          left: '50%',
          translate: '-50% 0',
          width: cardDims.width,
          height: cardDims.height
        };
      } else if (isLeft) {
        return {
          transform: 'perspective(1000px) rotateY(20deg) scale(0.85)',
          zIndex: 20,
          opacity: 0.8,
          left: '25%',
          translate: '-100% 0',
          width: cardDims.width,
          height: cardDims.height
        };
      } else if (isRight) {
        return {
          transform: 'perspective(1000px) rotateY(-20deg) scale(0.85)',
          zIndex: 20,
          opacity: 0.8,
          left: '75%',
          translate: '0 0',
          width: cardDims.width,
          height: cardDims.height
        };
      }
    }

    return {};
  };

  // Check if card is currently visible
  const isCardVisible = (index) => {
    const visibleIndexes = [];
    for (let i = 0; i < visibleSlides; i++) {
      visibleIndexes.push((currentIndex + i) % totalSlides);
    }
    return visibleIndexes.includes(index);
  };

  // Get responsive container height
  const getContainerHeight = () => {
    switch(screenSize) {
      case 'mobile': return '250px';
      case 'tablet': return '300px';
      default: return '350px';
    }
  };

  // Get responsive text size
  const getTextSize = () => {
    switch(screenSize) {
      case 'mobile': return 'text-lg';
      case 'tablet': return 'text-xl';
      default: return 'text-2xl';
    }
  };

  return (
    <div className="relative overflow-x-hidden w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12">

      {/* Gallery Container */}
      <div 
        className="relative flex items-center justify-center overflow-visible"
        style={{ height: getContainerHeight() }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Cards Container */}
        <div className="relative w-full h-full">
          {wallpaperCategories.map((category, index) => {
            const style = getCardStyle(index);
            const isVisible = isCardVisible(index);
            const textSize = getTextSize();
            
            return (
              <div
                key={category.id}
                className={`absolute  overflow-hidden cursor-pointer transition-all duration-700 ease-out group ${
                  isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{
                  ...style,
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center'
                }}
                onClick={() => isVisible && handleCardClick(category.id)}
              >
                {/* Background Image with overlay */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += `
                        <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700"></div>
                      `;
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 text-center">
                  <h3 className={`${textSize} font-bold ${category.textColor} mb-2 sm:mb-3 leading-tight`}>
                    {category.title}
                  </h3>
                  
                  {/* Center indicator - only on desktop */}
                  {screenSize === 'desktop' && style.transform?.includes('rotateY(0deg)') && (
                    <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-4 sm:w-6 h-1 bg-yellow-400 rounded-full"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                </div>

                {/* Click indicator - hidden on mobile */}
                {screenSize !== 'mobile' && (
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm">→</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      
      </div>

      
    </div>
  );
}