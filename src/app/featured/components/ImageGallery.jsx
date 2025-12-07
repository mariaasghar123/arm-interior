"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageGallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* ==== Image Grid ==== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            onClick={() => setSelectedImage(img)}
          >
            <Image
              src={img}
              alt="Gallery Image"
              width={300}
              height={300}
              className="w-full h-40 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* ==== Fullscreen Popup ==== */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedImage(null)} // close on outside click
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Zoom Image"
              width={800}
              height={800}
              className="w-full max-h-[90vh] object-contain rounded-lg"
            />

            {/* Close Button */}
            <button
              className="absolute -top-4 -right-4 bg-white text-black w-10 h-10 rounded-full shadow-lg text-xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
