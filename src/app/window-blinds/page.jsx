
import Navbar from '@/components/Navbar'
import React from 'react'
import Windowblind1 from './components/Windowblind1';
import FourCards from '../wallpapers/components/FourCards';

function page() {
  const homeCategories = [
  { id: 1, title: "Modern Wallpapers", image: "/media/wall6.webp", description: "Latest designs" },
  { id: 2, title: "Luxury Vinyl", image: "/media/wall7.webp", description: "Premium quality" },
];
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/media/bg-arm.jpg')",
        }}
      >
        <Navbar />
        <Windowblind1/>
        <FourCards data={[
    { id: 1, title: "MOTORIZED BLINDS", bgImage: "/media/window1.webp" },
    { id: 2, title: "ROLLER WINDOW BLINDS ", bgImage: "/media/window2.webp" },
    { id: 3, title: "VERTICAL WINDOW BLINDS", bgImage: "/media/window 3.webp" },
    { id: 4, title: "ZEBRA WINDOW BLINDS", bgImage: "/media/window4.webp" },
    { id: 5, title: "BAMBO0 CHICK BLINDS", bgImage: "/media/window5.webp" },
    { id: 6, title: "SHANGRI-LA BLINDS", bgImage: "/media/window6.webp" },
  ]}
  
  cardWidth="w-full mx-auto"
  cols={3} 
  showLine={true}
  lineColor= " bg-gray-300"/>

  </div>
    </div>
  );
}


export default page
