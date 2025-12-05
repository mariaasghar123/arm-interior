"use client";

import { useState } from "react";

export default function WallStickerComponent({
  title = "Default Title",
  videoBtn = { text: "Videos", link: "#" },
  pdf1Btn = { text: "Download PDF 1", link: "#" },
  pdf2Btn = { text: "Download PDF 2", link: "#" },
  children, // accordion ke andar jo content bhejna ho
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto my-6">
      
      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        
        {/* Accordion Header */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex-1 flex items-center justify-between bg-white px-6 py-4 rounded shadow-sm border border-gray-200 hover:border-gray-300 transition"
        >
          <div className="flex items-center gap-4">
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-500 text-gray-700 text-lg leading-none">
              {open ? "−" : "+"}
            </span>

            <p className="text-lg font-bold text-gray-800 text-left">
              {title}
            </p>
          </div>

          <span className="text-gray-500 text-lg ml-4">{">"}</span>
        </button>

        {/* Buttons (Reusable) */}
        <div className="flex flex-wrap gap-3">
          <a
            href={videoBtn.link}
            target="_blank"
            className="bg-[#ffd739] hover:bg-[#f2c600] text-gray-800 text-sm font-medium px-5 py-2 rounded shadow-sm transition"
          >
            {videoBtn.text}
          </a>

          <a
            href={pdf1Btn.link}
            target="_blank"
            className="bg-[#ffd739] hover:bg-[#f2c600] text-gray-800 text-sm font-medium px-5 py-2 rounded shadow-sm transition"
          >
            {pdf1Btn.text}
          </a>

          <a
            href={pdf2Btn.link}
            target="_blank"
            className="bg-[#ffd739] hover:bg-[#f2c600] text-gray-800 text-sm font-medium px-5 py-2 rounded shadow-sm transition"
          >
            {pdf2Btn.text}
          </a>
        </div>
      </div>

      {/* Accordion Content */}
      {open && (
        <div className="mt-3 bg-white border border-gray-200 rounded px-6 py-4 text-sm text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
}
