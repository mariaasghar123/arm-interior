"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <>
    <div className="bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/media/bg-arm.jpg')",
  }}>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-6xl font-bold text-black mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6"></h2>
      <p className="mb-8 text-center text-gray-700">
        Oops! This page isn’t here. Head back to our homepage or check out these important pages to find what you’re looking for:


      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
    </div>
    

    </>
  );
}
