import HeroSection from '@/components/landingpage/HeroSection'
import Navbar from '@/components/Navbar'
import React from 'react'
import Faq1 from './components/Faq1';

function page() {

 
  
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
            FAQs
          </p>
        </div>

        
      </div>
        <div className="bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/media/bg-arm.jpg')",
  }}>
      <Faq1/>
  </div>
    </div>
  );
}


export default page
