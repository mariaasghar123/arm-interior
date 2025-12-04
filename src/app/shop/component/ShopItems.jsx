"use client";

import React from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function ShopItems({ products = [] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {products.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* IMAGE WRAPPER */}
          <div className="relative">
            {/* SALE BADGE */}
            {item.sale && (
              <span className="absolute top-3 left-3 bg-black text-yellow-300 text-xs font-bold px-2 py-1 rounded">
                Sale!
              </span>
            )}

            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            {/* PRODUCT CODE */}
            <p className="text-center text-gray-600 mt-2 text-sm">
              {item.code}
            </p>
          </div>

          {/* DETAILS */}
          <div className="p-4 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h2>

            {/* OLD PRICE + NEW PRICE */}
            <div className="mt-2">
              <p className="line-through text-gray-500 text-sm">
                Rs {item.oldPrice.toLocaleString()}
              </p>
              <p className="text-yellow-500 text-xl font-bold">
                Rs {item.newPrice.toLocaleString()}
              </p>
            </div>

            {/* BUTTON */}
            <button className="mt-4 w-full bg-black hover:bg-gray-800 text-yellow-300 font-semibold py-3 flex items-center justify-center gap-2">
              <FaShoppingCart />
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
