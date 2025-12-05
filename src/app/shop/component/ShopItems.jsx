"use client";

import React from "react";
import Link from "next/link";

export default function ShopItems({ products = [] }) {
  return (
    <div className= "max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((item) => (
        <Link key={item.id} href={`/shop/${item.id}`}>
          <div className="bg-white shadow hover:shadow-lg transition rounded-lg p-3 cursor-pointer">

            {/* IMAGE */}
            <img
              src={item.image}
              className="w-full h-48 object-cover rounded"
              alt={item.title}
            />

            {/* TITLE */}
            <h3 className="text-lg text-black font-bold mt-2">{item.title}</h3>

            {/* PRODUCT CODE */}
            <p className="text-sm text-gray-500">{item.code}</p>

            {/* PRICES */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-red-600 font-bold">
                Rs {item.newPrice.toLocaleString()}
              </span>

              {item.sale && (
                <span className="line-through text-gray-400">
                  Rs {item.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

          </div>
        </Link>
      ))}
    </div>
  );
}
