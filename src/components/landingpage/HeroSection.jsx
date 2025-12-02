// src/components/HeroSection.jsx
"use client";
import Logo from "../Logo";
import Navbar from "../Navbar";

 // ← Phir bhi yeh add karna hoga

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/media/video.mp4" type="video/mp4" />
          
          Your browser does not support the video tag.
        </video>
      </div> */}

      {/* Rest of your code remains same */}
      <div className="absolute top-0 left-0 w-full h-full " />
      <div className="relative z-10 pb-12 flex items-center justify-center h-full text-center">
        <h1 className="text-white text-2xl sm:text-5xl lg:text-7xl font-bold leading-tight px-4">
          Elevate Your{" "}
          <span className="relative inline-block">
            <span>Space</span>
            <span className="absolute left-0 -bottom-2 h-[6px] w-[100%] bg-yellow-400"></span>
          </span>{" "}
          With <br />
          Exquisite Designs And <br />
          <span className="relative inline-block italic">
            <span>Superior</span>
            <span className="absolute left-0 -bottom-2 h-[6px] w-[100%] bg-yellow-400"></span>
          </span>{" "}
          Quality.
        </h1>
      </div>
    </div>
  );
}