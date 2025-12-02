"use client";

import { useState } from 'react';

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full bg-transparent py-12 md:py-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - About Text */}
          <div className="space-y-6 md:space-y-8">
            <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Crafting exquisite spaces with superior quality and innovative designs
          </p>
        </div>
            {/* Section 1 */}
            
            <div className="group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To transform ordinary spaces into extraordinary experiences through 
                    innovative design solutions and premium quality materials. We believe 
                    every space tells a story, and we're here to help write yours.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To become the leading provider of premium interior solutions, 
                    setting new standards in design excellence and customer satisfaction 
                    across residential and commercial spaces.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="group cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">💎</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    Core Values
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>Quality Excellence</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>Innovative Design</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>Customer Satisfaction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>Timely Delivery</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/media/about.webp"
                alt="About Our Company"
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700"
                style={{
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-6 bg-white rounded-xl shadow-2xl p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">Excellence Award</div>
                  <div className="text-sm text-gray-600">Best Interior Design 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}