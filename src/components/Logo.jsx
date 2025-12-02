"use client";

export default function Logo({ src = "/media/ARM-logo.webp", size = 40, className = "" }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className=" flex items-center justify-center bg-transparent"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <img
          src={src}
          alt="Logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
