"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const links = ["Wallpapers", "Floorings", "Window Blinds", "Shop", "FAQs", "Contact Us"];

  // Detect screen size and auto-close menu on large screens
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      
      // Auto-close menu when switching to large screen
      if (!mobile && isOpen) {
        setIsOpen(false);
      }
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [isOpen]);

  // Also close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && isMobile) {
        setIsOpen(false);
      }
    };

    if (isOpen && isMobile) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, isMobile]);

  return (
    <div className="flex sm:flex-col mx-auto left-0 right-0 items-center justify-center z-50 -mt-12 sm:-mt-0">
      {/* <Logo size={180} className="pl-20 sm:pl-0 z-30"/> */}
      <Logo size={180} className="pl-20 sm:pl-0 z-30 mt-15 w-[200px] sm:w-[180px] "/>
      <nav className="sm:bg-black rounded-xl px-8 py-4 flex flex-col md:flex-row items-center justify-center max-w-4xl w-full relative">
        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-white font-semibold">
          {links.map((link) => (
            <li key={link} className="relative group">
  <Link
    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
    className="cursor-pointer text-white transition-colors duration-300 group-hover:text-yellow-300"
  >
    {link}
  </Link>
  <span className="absolute left-0 -bottom-5 h-1 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
</li>

          ))}
        </ul>

        {/* White Hamburger Button - Only show on mobile */}
        <div className="md:hidden flex items-center mt-10">
          <button
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow group z-50"
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              setIsOpen(!isOpen);
            }}
            aria-label="Menu">
            <span className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300
              ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black rounded-full transition-all duration-200
              ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`w-6 h-0.5 bg-black rounded-full transition-all duration-300
              ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay - Only show on mobile */}
        <div className={`fixed inset-0 z-40 transition-all duration-500
          ${isOpen && isMobile ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          
          {/* Black Blur Background */}
          <div className={`absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-700
            ${isOpen && isMobile ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsOpen(false)}>
          </div>
          
          {/* Menu Items Container - Perfectly Centered */}
          <div className={`absolute inset-0 mt-12 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${isOpen && isMobile ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            
            {/* Menu Items List with Better Spacing */}
            <div className="w-full max-w-md px-6">
              <Logo size={120} />
              <ul className="space-y-10 md:space-y-12">
                {links.map((link, index) => (
                  <li
                    key={link}
                    className="overflow-hidden text-center"
                  >
                    <Link
  href={`/${link.toLowerCase().replace(/ /g, "-")}`}
  onClick={() => setIsOpen(false)}
  className="text-xl md:text-5xl font-bold text-white hover:text-yellow-300 transition-all duration-500 transform hover:scale-110 active:scale-95 block py-2"
  style={{
    transform: isOpen && isMobile ? 'translateY(0) scale(1)' : `translateY(-${(index + 1) * 80}px) scale(0.8)`,
    opacity: isOpen && isMobile ? 1 : 0,
    transitionDelay: isOpen && isMobile ? `${index * 100}ms` : '0ms',
    transitionDuration: '800ms',
    transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
  }}
>
  {link}
</Link>

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}