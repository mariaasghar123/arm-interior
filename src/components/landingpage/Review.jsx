"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CustomerReviews() {
  const reviews = [
    {
      text: "Professionalism at its finest! A.R.M INTERIOR provided excellent guidance and support throughout the entire purchasing process.",
      name: "Ali Ahmed",
    },
    {
      text: "Absolutely loved the work. I would definitely recommend ARM INTERIOR to anyone and I am completely satisfied with their services 🔥",
      name: "Nadeem Khairmuhammad",
    },
    {
      text: "Impressed by the vast selection and top-notch quality at A.R.M INTERIOR. Will definitely be a returning customer!",
      name: "Azam",
    },
    {
      text: "Excellent service and high-quality products. The team was very professional and helpful in selecting the perfect wallpaper.",
      name: "Sarah Khan",
    },
    {
      text: "Best interior service in town! They transformed my living room completely. Highly recommended!",
      name: "Usman Raza",
    },
    {
      text: "Great experience from start to finish. The installation was quick and the results were beyond expectations.",
      name: "Fatima Sheikh",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    dots: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Wavy SVG for top
  const TopWave = () => (
    <svg
      className="absolute top-0 left-0 w-full h-20 z-20"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="fill-white"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-white"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-white"
      />
    </svg>
  );

  // Wavy SVG for bottom
  const BottomWave = () => (
    <svg
      className="absolute bottom-0 left-0 w-full h-20 rotate-180"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="fill-white"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-white"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-white"
      />
    </svg>
  );

  return (
    <section className="relative  text-white py-24 overflow-hidden">
      {/* Top Wavy SVG */}
      <TopWave />

      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/media/new3.webp')" }}
        ></div>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-5xl font-bold text-yellow-400 mb-16 text-center">
          Customer Reviews
        </h2>

        <div className="max-w-8xl mx-auto">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4 focus:outline-none">
                <div className=" rounded-2xl p-8 shadow-2xl  hover:border-yellow-500/40 transition-all duration-300 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="text-yellow-400 text-5xl mb-6">"</div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-grow">
                    {review.text}
                  </p>

                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Customer Name */}
                  <h4 className="font-bold text-xl text-yellow-300 text-center">
                    {review.name}
                  </h4>

                  {/* Customer Badge */}
                  <div className="mt-2 text-center">
                    <span className="inline-block bg-yellow-500/10 text-yellow-300 text-sm px-4 py-1 rounded-full">
                      Verified Customer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Navigation Dots (Custom) */}
        {/* <div className="flex justify-center mt-12 space-x-3">
          {[...Array(Math.ceil(reviews.length / 3))].map((_, i) => (
            <button
              key={i}
              className="w-3 h-3 rounded-full bg-gray-700 hover:bg-yellow-400 transition-colors"
              aria-label={`Go to review set ${i + 1}`}
            ></button>
          ))}
        </div> */}
      </div>

      {/* Bottom Wavy SVG */}
      <BottomWave />
    </section>
  );
}