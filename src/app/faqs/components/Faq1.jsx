"use client";

import { MdWallpaper, MdBlinds } from "react-icons/md";
import { FaHome } from "react-icons/fa";

export default function MinimalCategoryCards() {
  const categories = [
    { id: 1, title: "Wallpaper", icon: <MdWallpaper /> },
    { id: 2, title: "Flooring", icon: <FaHome /> },
    { id: 3, title: "Blinds", icon: <MdBlinds /> }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 p-10 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {categories.map((category) => (
          <div key={category.id} className="group relative">
            <div
              className="px-10 py-6 flex gap-10 items-center transition-all duration-300
              bg-transparent text-black
              group-hover:bg-black group-hover:text-white
              group-hover:shadow-xl group-hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-xl transition-colors duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <div className="text-xl font-medium transition-colors duration-300">
                {category.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
