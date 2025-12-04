import Navbar from '@/components/Navbar'
import React from 'react'
import ContactForm from './component/ContactForm';
import Map from './component/Map';

function page() {
  const homeCategories = [
  { id: 1, title: "Modern Wallpapers", image: "/media/wall6.webp", description: "Latest designs" },
  { id: 2, title: "Luxury Vinyl", image: "/media/wall7.webp", description: "Premium quality" },
];
  return (
    <div>
      <div
        className=" bg-cover bg-center bg-no-repeat relative pb-10"
        style={{
          backgroundImage: "url('/media/bg-arm.jpg')",
        }}
      >
          <div className="absolute inset-0 bg-black/10"></div>
        <Navbar className="z-30 relative"/>
      </div>
      <ContactForm/>
      <Map/>
    </div>
  );
}


export default page
