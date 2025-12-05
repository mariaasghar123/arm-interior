"use client";
import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState("description");

  return (
    <div className="w-full">
      {/* TAB BUTTONS */}
      <div className="flex gap-6 border-b pb-2 text-gray-400">
        <button
          onClick={() => setActive("description")}
          className={`pb-2 ${
            active === "description" ? "border-b-2 border-black font-semibold text-black" : ""
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActive("info")}
          className={`pb-2 ${
            active === "info" ? "border-b-2 border-black font-semibold text-black" : ""
          }`}
        >
          Additional Information
        </button>

        <button
          onClick={() => setActive("reviews")}
          className={`pb-2 ${
            active === "reviews" ? "border-b-2 border-black font-semibold text-black" : ""
          }`}
        >
          Reviews
        </button>
      </div>

      {/* TAB CONTENT */}
      <div className="mt-6 text-gray-600">
        {active === "description" && (
          <p>
            This wallpaper is made with premium quality material and gives your
            wall a luxurious look.
          </p>
        )}

        {active === "info" && (
          <ul className="list-disc pl-6">
            <li>Material: PVC</li>
            <li>Roll Size: 10m x 0.53m</li>
            <li>Water Resistant</li>
          </ul>
        )}

        {active === "reviews" && (
          <div>
            <p>No reviews yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
