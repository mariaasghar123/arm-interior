
import Navbar from '@/components/Navbar'
import React from 'react'
import Windowblind1 from './components/Windowblind1';
import FourCards from '../wallpapers/components/FourCards';

function page() {
  
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
    { id: 1, title: "MOTORIZED BLINDS", bgImage: "/media/window1.webp", link: "/window-blinds/motorized-blinds" },
    { id: 2, title: "ROLLER WINDOW BLINDS ", bgImage: "/media/window2.webp" , link: "/window-blinds/roller-window-blinds"},
    { id: 3, title: "VERTICAL WINDOW BLINDS", bgImage: "/media/window 3.webp", link: "/window-blinds/vertical-window-blinds" },
    { id: 4, title: "ZEBRA WINDOW BLINDS", bgImage: "/media/window4.webp", link: "/window-blinds/zebra-window-blinds" },
    { id: 5, title: "BAMBOO CHICK BLINDS", bgImage: "/media/window5.webp", link: "/window-blinds/bamboo-chick-blinds" },
    { id: 6, title: "SHANGRI-LA BLINDS", bgImage: "/media/window6.webp", link: "/window-blinds/shangri-la-blinds" },
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
