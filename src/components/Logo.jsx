"use client";
import Link from "next/link";

export default function Logo({ src = "/media/ARM-logo.webp", size = 40, className = "" }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <Link href="/">
        <div
          className="bg-transparent
                     w-[100px]     // Desktop
                     md:w-[150px]  // Tablets
                     sm:w-[120px]  // Mobiles
                     xs:w-[100px]  // Smallest screens
                    "
        >
          <img
            src={src}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
}
