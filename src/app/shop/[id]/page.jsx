import React from "react";
import Navbar from "@/components/Navbar";
import Tabs from "./component/Tabs";
import Link from "next/link";
export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const products = [
    {
      id: 1,
      title: "China Wallpaper 30",
      code: "38-FW 35013",
      image: "/media/p1.webp",
      oldPrice: 2000,
      newPrice: 1500,
      sale: true,
    },
    {
      id: 2,
      title: "China Wallpaper 29",
      code: "41-FW 35014",
      image: "/media/p2.webp",
      oldPrice: 2000,
      newPrice: 1500,
      sale: true,
    },
    {
      id: 3,
      title: "China Wallpaper 28",
      code: "40-FW 35015",
      image: "/media/p3.webp",
      oldPrice: 2000,
      newPrice: 1500,
      sale: true,
    },
    {
      id: 4,
      title: "China Wallpaper 27",
      code: "40-FW 35016",
      image: "/media/p4.webp",
      oldPrice: 2000,
      newPrice: 1700,
      sale: true,
    },
    {
      id: 5,
      title: "China Wallpaper 26",
      code: "39-FW 35017",
      image: "/media/p5.webp",
      oldPrice: 2300,
      newPrice: 1800,
      sale: true,
    },
    {
      id: 6,
      title: "China Wallpaper 25",
      code: "38-FW 35018",
      image: "/media/p6.webp",
      oldPrice: 2500,
      newPrice: 2000,
      sale: false,
    },
    {
      id: 7,
      title: "China Wallpaper 24",
      code: "38-FW 35019",
      image: "/media/wall1.webp",
      oldPrice: 2200,
      newPrice: 1700,
      sale: true,
    },
    {
      id: 8,
      title: "China Wallpaper 23",
      code: "37-FW 35020",
      image: "/media/wall2.webp",
      oldPrice: 2000,
      newPrice: 1500,
      sale: true,
    },
    {
      id: 9,
      title: "China Wallpaper 22",
      code: "36-FW 35021",
      image: "/media/wall3.webp",
      oldPrice: 2100,
      newPrice: 1600,
      sale: true,
    },
    {
      id: 10,
      title: "China Wallpaper 21",
      code: "35-FW 35022",
      image: "/media/wall4.webp",
      oldPrice: 1900,
      newPrice: 1500,
      sale: false,
    }
  ];

  const product = products.find((p) => p.id == id);

  if (!product) {
    return <p className="p-10 text-center text-red-600">Product not found!</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Navbar className="mb-10"/>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-[400px] pt-20 object-cover rounded-lg"
      />

      <h1 className="text-3xl text-gray-700 font-bold mt-6">{product.title}</h1>
      <p className="text-gray-500 mt-1">{product.code}</p>

      <div className="flex items-center gap-4 mt-4">
        <span className="text-3xl font-bold text-red-600">
          Rs {product.newPrice}
        </span>
        {product.sale && (
          <span className="line-through text-gray-500 text-xl">
            Rs {product.oldPrice}
          </span>
        )}
      </div>
      {/* ADD TO CART BUTTON */}
      <Link href="/cart">
      <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
   Add to Cart
    </button>
      </Link>


      <p className="mt-6 text-lg">
        <Tabs/>
      </p>
    </div>
  );
}





