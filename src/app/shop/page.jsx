import HeroSection from '@/components/landingpage/HeroSection'
import Navbar from '@/components/Navbar'
import ShopItems from './component/ShopItems';
import React from 'react'

function page() {

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
    },
    {
      id: 11,
      title: "China Wallpaper 30",
      code: "38-FW 35013",
      image: "/media/p1.webp",
      oldPrice: 2000,
      newPrice: 1500,
      sale: true,
    },
    {
      id: 12,
      title: "China Wallpaper 29",
      code: "41-FW 35014",
      image: "/media/p2.webp",
      oldPrice: 2000,
      newPrice: 1500,
      sale: true,
    },
  ];
  
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/media/wallpaperbg.avif')",
        }}
      >
        <Navbar />
        <div>
          <p className="text-4xl lg:text-6xl text-center p-9 font-bold py-20">
            SHOP
          </p>
        </div>

        {/* 🌊 Wavy Bottom Shape */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ lineHeight: 0 }}
        >
          <svg
      className="absolute bottom-0 left-0 w-full h-20 rotate-180"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
        opacity=".25"
        className="fill-white"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-white"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
        className="fill-white"
      />
    </svg>
        </div>
      </div>
        <div className="bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/media/bg-arm.jpg')",
  }}>
      <ShopItems products={products} />
  </div>
    </div>
  );
}


export default page
