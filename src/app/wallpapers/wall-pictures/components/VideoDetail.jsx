"use client";

import { FaCheckCircle } from "react-icons/fa";

export default function VideoDetail() {
  const specs = [
    "Joint Less / No Joint",
    "01 Panel only",
    "Canvas Stuff & Base",
    "Material Base is Mate Texture Not Gloss",
    "Imported",
    "Perfectly Manufactured with excellent workmanship",
    "Moisture Resistant",
    "Tear Resistant",
    "Water Ink printing for environment Protection",
    "Washable & Waterproof Wall Picture",
    "Twice to Three Long Lifespan than Common Wallpaper",
    "CE Certification, ISO 9001, SGS",
    "Non-Toxic, Durable & Moist Proof",
    "No Exchange",
    "No Refund",
    "Out Of Khi No Delivery Charges of Courier",
  ];

  return (
    <div className="w-full px-5 md:px-16 py-10 ">
      
      {/* -------------------- HEADING -------------------- */}
      <h1 className="text-3xl  md:text-4xl font-bold text-gray-900">
        Realistic & Artistic 3D IMPORTED Wall PICTURES
      </h1>
      <p className="text-gray-600 mt-2">
        Our entire collection of wall pictures features a matte texture
        surface, crafted from canvas material and imported for your satisfaction.
      </p>

      {/* -------------------- SPECIFICATIONS -------------------- */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Specifications of Wall Pictures:
      </h2>

      <div className="space-y-3">
        {specs.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <FaCheckCircle className="text-black text-xl" />
            <p className="text-gray-800 text-lg">{item}...</p>
          </div>
        ))}
      </div>

      {/* ------------------- ADDITIONAL NOTE ------------------- */}
      <h3 className="text-xl font-semibold mt-10">Additional Note:</h3>
      <p className="text-gray-600 mt-2 leading-relaxed">
        All Customers are advised that there may be slight color variation or picture sharpness 
        difference in actual wall pictures and catalog images. This is normal and not considered 
        as any defect. No refunds or exchange due to such variation & other issues.
      </p>

      {/* -------------------- VIDEO SECTION -------------------- */}
      <div className="mt-10 w-full flex justify-center">
        <video
          className="w-full md:w-[70%] rounded-lg"
          controls
          poster="/media/thumbnail.png" // optional
          autoPlay
          muted
        >
          <source src="/media/my-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
