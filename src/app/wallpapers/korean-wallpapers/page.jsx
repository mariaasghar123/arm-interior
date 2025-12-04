import Navbar from "@/components/Navbar";
import React from "react";
import FourCards from "../components/FourCards";

function page() {
  const homeCategories = [
    {
      id: 1,
      title: "Modern Wallpapers",
      image: "/media/wall6.webp",
      description: "Latest designs",
    },
    {
      id: 2,
      title: "Luxury Vinyl",
      image: "/media/wall7.webp",
      description: "Premium quality",
    },
  ];
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/media/k10.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <Navbar />
        <div>
          <p className="text-4xl lg:text-6xl text-center p-9 font-bold py-20 relative z-30">
            KOREAN WALLPAPERS
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
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/media/bg-arm.jpg')",
        }}
      >
        <FourCards
          data={[
            {
              id: 1,
              title: "PROMIZE KOREAN",
              bgImage: "/media/k1.webp",
              link: "/wallpapers/korean-wallpapers/promise-korean",
            },
            {
              id: 2,
              title: "DARAE VOL 5 ",
              bgImage: "/media/k2.webp",
              link: "/wallpapers/korean-wallpapers/darae-vol-5",
            },
            {
              id: 3,
              title: "SQUARE",
              bgImage: "/media/k3.webp",
              link: "/wallpapers/korean-wallpapers/square",
            },
            {
              id: 4,
              title: "STEPS",
              bgImage: "/media/k4.webp",
              link: "/wallpapers/korean-wallpapers/steps",
            },
            {
              id: 5,
              title: "EDITION",
              bgImage: "/media/k5.webp",
              link: "/wallpapers/korean-wallpapers/edition",
            },
            {
              id: 6,
              title: "MATIE",
              bgImage: "/media/k6.webp",
              link: "/wallpapers/korean-wallpapers/matie",
            },
            {
              id: 7,
              title: "M&G",
              bgImage: "/media/k7.webp",
              link: "/wallpapers/korean-wallpapers/mg",
            },
            {
              id: 8,
              title: "FORENA",
              bgImage: "/media/k8.webp",
              link: "/wallpapers/korean-wallpapers/forena",
            },
            {
              id: 9,
              title: "HERA VOL 5",
              bgImage: "/media/k9.webp",
              link: "/wallpapers/korean-wallpapers/hera-vol-5",
            },
            {
              id: 9,
              title: "AURORA-VOL-1",
              bgImage: "/media/k9.webp",
              link: "/wallpapers/korean-wallpapers/aurora",
            },
          ]}
          cardWidth="w-full mx-auto"
          cols={3}
          showLine={true}
          lineColor=" bg-gray-300"
        />
      </div>
    </div>
  );
}

export default page;
