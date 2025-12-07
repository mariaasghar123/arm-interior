"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/media/bg-arm.jpg')",
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen  px-4">
          <h1 className="md:text-[200px] text-8xl font-bold text-black mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6"></h2>
          <p className="mb-8 text-center text-gray-700">
            Oops! This page isn’t here. Head back to our homepage or check out
            these important pages to find what you’re looking for:
          </p>
          <div>
            <div className="flex flex-col sm:flex-row  gap-4 space-4 mb-8">
              <Link
                href="/"
                className="px-6 py-3 bg-black text-yellow-300  transition"
              >
                Home
              </Link>
              <Link
                href="/wallpapers"
                className="px-6 py-3 bg-black text-yellow-300  transition"
              >
                Wallpapers
              </Link>
              <Link
                href="/floorings"
                className="px-6 py-3 bg-black text-yellow-300  transition"
              >
                Floorings
              </Link>
              <Link
                href="/window-blinds"
                className="px-6 py-3 bg-black text-yellow-300  transition"
              >
                Window Blinds
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
