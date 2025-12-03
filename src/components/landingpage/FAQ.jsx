"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I choose the right wallpaper for my room?",
      answer: "Consider the room's lighting, size, and existing decor. For small rooms, use light colors and small patterns. For large rooms, you can use bold patterns and darker colors. Our experts can also provide free consultation to help you choose the perfect wallpaper.",
    },
    {
      question: "What is the installation process for your wallpapers?",
      answer: "We offer professional installation services. Our process includes: 1) Surface preparation, 2) Accurate measurements, 3) Precise cutting, 4) Professional installation, and 5) Final inspection. We also provide DIY guides if you prefer to install yourself.",
    },
    {
      question: "Are your wallperas washable and durable?",
      answer: "Yes, all our wallpapers are made from high-quality, washable materials. Most are vinyl-based which makes them durable, moisture-resistant, and easy to clean. They can last 10-15 years with proper maintenance.",
    },
    // {
    //   question: "Do you provide samples before purchase?",
    //   answer: "Absolutely! We offer sample swatches for all our wallpaper collections. You can order samples online or visit our showroom. This helps you see the actual color and texture in your space before making a decision.",
    // },
    // {
    //   question: "What is your return and refund policy?",
    //   answer: "We offer a 30-day return policy for unopened products. For customized orders, returns may have restrictions. Installation services come with a satisfaction guarantee - if you're not happy with the result, we'll fix it or refund the service cost.",
    // },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative  py-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/media/bg-arm.jpg')",
            backgroundAttachment: 'fixed'
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">
            FAQs <span className="text-yellow-400"></span>
          </h2>
          
        </div>

        {/* FAQ Items Container */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                {/* Left side with + icon */}
                <div className="flex items-center gap-6">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-yellow-500 text-black' 
                      : 'bg-white/20 text-black group-hover:bg-yellow-500 group-hover:text-black'
                  }`}>
                    {openIndex === index ? (
                      <FiMinus className="w-5 h-5" />
                    ) : (
                      <FiPlus className="w-5 h-5" />
                    )}
                  </div>
                  
                  <div>
                    
                    <h3 className="text-xl font-semibold text-black transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                </div>

                {/* Arrow indicator for larger screens */}
                <div className={`hidden md:block transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg 
                    className="w-6 h-6 text-black group-hover:text-yellow-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer Panel with Animation */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="pl-16 border-l-2 border-yellow-500/50">
                    <div className=" rounded-xl p-6">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}